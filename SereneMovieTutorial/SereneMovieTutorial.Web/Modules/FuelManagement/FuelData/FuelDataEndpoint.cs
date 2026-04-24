
namespace SereneMovieTutorial.FuelManagement.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.FuelDataRepository;
    using MyRow = Entities.FuelDataRow;

    [RoutePrefix("Services/FuelManagement/FuelData"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FuelDataController : ServiceEndpoint
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

        //private void ValidateFuelDetails(IUnitOfWork uow, MyRow row)
        //{
        //    if (row.ShowFuelDetails == YesNo.No)
        //    {
        //        var hasLocal = row.FuelDetails != null && row.FuelDetails.Count > 0;

        //        var hasDb = false;

        //        if (row.Id != null)
        //        {
        //            hasDb = uow.Connection.Count<FuelDetailsRow>(
        //                FuelDetailsRow.Fields.FuelDataId == row.Id.Value) > 0;
        //        }

        //        if (hasLocal || hasDb)
        //        {
        //            throw new ValidationError("FuelDetails",
        //                "Cannot set 'No' when Fuel Details contains data.");
        //        }
        //    }
        //}
    }
}
