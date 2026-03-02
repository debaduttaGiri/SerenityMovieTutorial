
namespace SereneMovieTutorial.Default.Endpoints
{
    using iTextSharp.text;
    using iTextSharp.text.pdf;
    using System.IO;

    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Default.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.DistictRepository;
    using MyRow = Entities.DistictRow;
    using System;
    using System.Collections.Generic;

    [RoutePrefix("Services/Default/Distict"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DistictController : ServiceEndpoint
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
        [HttpPost]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var list = new DistictRepository().List(connection, request);

            var columns = ReportColumnConverter.ObjectTypeToList(typeof(Columns.DistictColumns));

            var bytes = ExcelReportGenerator.GeneratePackageBytes(
                columns,
                list.Entities,
                "District List",
                "District",
                OfficeOpenXml.Table.TableStyles.Medium2);

            return ExcelContentResult.Create(bytes, "DistrictList.xlsx");
        }
        [HttpPost]
        public FileContentResult ListPdf(IDbConnection connection, ListRequest request)
        {
            
            request.IncludeColumns = request.IncludeColumns ?? new HashSet<string>();
            request.IncludeColumns.Add("Plant1");

            var listResponse = List(connection, request);
            var list = listResponse.Entities;

            using (var ms = new MemoryStream())
            {
                Document doc = new Document(PageSize.A4.Rotate(), 20, 20, 20, 20);
                PdfWriter.GetInstance(doc, ms);
                doc.Open();


                Paragraph title = new Paragraph("District List",
                FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14));
                title.Alignment = Element.ALIGN_CENTER;
                doc.Add(title);

                Paragraph date = new Paragraph(DateTime.Now.ToString("dd-MM-yyyy HH:mm"),
                    FontFactory.GetFont(FontFactory.HELVETICA, 9));
                date.Alignment = Element.ALIGN_RIGHT;
                doc.Add(date);

                doc.Add(new Paragraph(" "));

                PdfPTable table = new PdfPTable(4);
                table.WidthPercentage = 100;
                table.SetWidths(new float[] { 1, 3, 3, 3 });

                BaseColor headerColor = new BaseColor(52, 122, 183);
                BaseColor rowColor1 = new BaseColor(240, 240, 240);
                BaseColor rowColor2 = BaseColor.WHITE;

                var headerFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 10, BaseColor.WHITE);
                var bodyFont = FontFactory.GetFont(FontFactory.HELVETICA, 9);

                // Header
                AddHeader(table, "S. No", headerFont, headerColor);
                AddHeader(table, "Plant", headerFont, headerColor);
                AddHeader(table, "Distict", headerFont, headerColor);
                AddHeader(table, "Remarks", headerFont, headerColor);

                // Data rows
                int serial = 1;
                bool alternate = false;

                foreach (var item in list)
                {
                    BaseColor bg = alternate ? rowColor1 : rowColor2;

                    AddCell(table, serial.ToString(), bodyFont, bg);
                    AddCell(table, item.Plant1 ?? "", bodyFont, bg);
                    AddCell(table, item.Distict ?? "", bodyFont, bg);
                    AddCell(table, item.Remarks ?? "", bodyFont, bg);

                    serial++;
                    alternate = !alternate;
                }

                doc.Add(table);
                doc.Close();

                return File(ms.ToArray(), "application/pdf", "DistrictList.pdf");
            }
        }

        private void AddHeader(PdfPTable table, string text, Font font, BaseColor bgColor)
        {
            PdfPCell cell = new PdfPCell(new Phrase(text, font));
            cell.BackgroundColor = bgColor;
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            cell.Padding = 6;
            cell.BorderWidth = 0;
            table.AddCell(cell);
        }

        private void AddCell(PdfPTable table, string text, Font font, BaseColor bgColor)
        {
            PdfPCell cell = new PdfPCell(new Phrase(text ?? "", font));
            cell.BackgroundColor = bgColor;
            cell.Padding = 5;
            cell.BorderWidth = 0;

            
            cell.HorizontalAlignment = Element.ALIGN_CENTER;
            cell.VerticalAlignment = Element.ALIGN_MIDDLE;

            table.AddCell(cell);
        }
    }
    
}
