
namespace SereneMovieTutorial.Default.Endpoints
{
    using SereneMovieTutorial.Default.Repositories;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.DistictRepository;
    using MyRow = Entities.DistictRow;

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



    }

}
