
namespace SereneMovieTutorial.FuelManagement.Endpoints
{
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.FuelManagement.Repositories;
    using SereneMovieTutorial.Modules.FuelManagement.Dieselissue;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.DieselissueRepository;
    using MyRow = Entities.DieselissueRow;

    [RoutePrefix("Services/FuelManagement/Dieselissue"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DieselissueController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }
        //[HttpPost, AuthorizeCreate(typeof(MyRow))]
        //public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    var fld = MyRow.Fields;

        //    int count = uow.Connection.Count<MyRow>(
        //        fld.Tripno == (int)request.Entity.Tripno &&
        //        fld.VehicleId == request.Entity.VehicleId);

        //    if (count > 0)
        //        throw new ValidationError("Trip and Vehicle already exists!");

        //    return new MyRepository().Create(uow, request);
        //}


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
        public decimal? GetDieselRate(IUnitOfWork uow, DieselRateRequest request)
        {
            return new DieselissueRepository().GetDieselRate(uow.Connection, request.Date);
        }
        public TripDetailsResponse GetTripDetails(IDbConnection connection, TripDetailsRequest request)
        {
            var response = new TripDetailsResponse();
            try
            {
                var fld = LoadingTripRow.Fields;

                var loadingTripData = connection.TryFirst<LoadingTripRow>(
                    fld.LoadingTripId == request.Tripid &&
                    fld.VehicleId == request.VehicleId);

                if (loadingTripData != null)
                {
                    response.Details = loadingTripData;
                }
                else
                {
                    response.ErrorMsg = "Vehicle does not match this trip!";
                }
            }
            catch (Exception ex)
            {
                response.ErrorMsg = ex.Message;
            }

            return response;
        }

    }
    public class TripDetailsResponse : ServiceResponse
    {
        public LoadingTripRow Details { get; set; }
        public string ErrorMsg { get; set; }
    }
    public class TripDetailsRequest : ServiceRequest
    {
        public int VehicleId { get; set; }
        public int Tripid { get; set; }
    }
}
