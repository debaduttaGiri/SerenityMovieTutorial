
namespace SereneMovieTutorial.Inventry.Endpoints
{
    using System;
   
    
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.ItemRepository;
    using MyRow = Entities.ItemRow;
    using SereneMovieTutorial.Inventry.Entities;
    using SereneMovieTutorial.Inventry.Repositories;
    using System.IO;
    using Serenity.Reporting;
    using Serenity;
    using System.Collections.Generic;
    using OfficeOpenXml;
    using SereneMovieTutorial.Modules.Common.BusinessLogic;

    [RoutePrefix("Services/Inventry/Item"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ItemController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(MyRow));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "Item_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost]
        [Obsolete]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            //ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            var response = new ExcelImportResponse
            {
                ErrorList = new List<string>(),
                Inserted = 0
            };

            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
            using (var ep = new ExcelPackage(fs)) // ✅ better usage
            {
                var worksheet = ep.Workbook.Worksheets[1];
                worksheet.TrimLastEmptyRows();

                for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
                {
                    try
                    {
                        var importrow = new ItemRow
                        {
                            Partnumber = Convert.ToString(worksheet.Cells[row, 1].Value ?? ""),
                            Partname = Convert.ToString(worksheet.Cells[row, 2].Value ?? ""),
                            Openingstock = Convert.ToInt32(worksheet.Cells[row, 3].Value ?? 0),
                            Rate = Convert.ToDecimal(worksheet.Cells[row, 4].Value ?? 0),
                            Balancestock = Convert.ToDecimal(worksheet.Cells[row, 5].Value ?? 0),
                            Stocklvlminimum = Convert.ToDecimal(worksheet.Cells[row, 6].Value ?? 0),
                            Stocklvlmaximum = Convert.ToDecimal(worksheet.Cells[row, 7].Value ?? 0),
                            Purchasestock = Convert.ToDecimal(worksheet.Cells[row, 8].Value ?? 0)
                        };

                        uow.Connection.Insert(importrow);
                        response.Inserted++;
                    }
                    catch (Exception ex)
                    {
                        throw new ValidationError(
                            $"Error importing PartName: {worksheet.Cells[row, 2].Value ?? ""}. Details: {ex.Message}");
                    }
                }
            }

            return response;
        }
    }

}
