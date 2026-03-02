
namespace SereneMovieTutorial.Default.Endpoints
{
    using SereneMovieTutorial.Default.Entities;
    using SereneMovieTutorial.Default.Repositories;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.LoadingTripRepository;
    using MyRow = Entities.LoadingTripRow;

    [RoutePrefix("Services/Default/LoadingTrip"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class LoadingTripController : ServiceEndpoint
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
        //-----------------------------------------------------------------------------
        public VehicleDetailsResponse GetVehicleDetails(
             IDbConnection connection,
        VehicleDetailsRequest request)
        {
            var response = new VehicleDetailsResponse
            {
                Details = connection.TryById<VehicleMasterRow>(request.VehicleId)
            };

            return response;
        }

        
        public class VehicleDetailsRequest : ServiceRequest
        {
            public int VehicleId { get; set; }
        }


        public class VehicleDetailsResponse : ServiceResponse
        {
            public VehicleMasterRow Details { get; set; }
        }

        public BranchResponse GetBranch()
        {
            var response = new BranchResponse
            {
                BranchName = (string)Session["BranchName"],
                BranchId = (int)Session["BranchId"]
            };
            return response;
        }
        public class BranchResponse: ServiceResponse
        {
            public String BranchName { get; set; }
            public int BranchId { get; set; }
        }

     


        [HttpPost]
        public ExpenseResponse GetExpenseByRoute(IDbConnection connection, ExpenseRequest request)
        { 
            var response = new ExpenseResponse();
            try
            {
                var ImpResult = connection.First<ExpenseRow>(
                    ExpenseRow.Fields.Plant == request.PlantId &&
                       ExpenseRow.Fields.District == request.DistrictId &&
                       ExpenseRow.Fields.Destination == request.DestinationId &&
                       ExpenseRow.Fields.Wheels == request.Wheels &&
                       ExpenseRow.Fields.Weight == request.Weight);
                if (ImpResult != null)
                {
                    response.Details = ImpResult;
                }

            }
            catch (Exception ex)
            { 
                response.ErrorMsg = ex.Message;
            }
            return response;
        }
        public class ExpenseRequest : ServiceRequest
        {
            public int PlantId { get; set; }
            public int DistrictId { get; set; }
            public int DestinationId { get; set; }
            public int Wheels { get; set; }
            public decimal Weight { get; set; }
        }

        public class ExpenseResponse : ServiceResponse
        {
              public ExpenseRow Details { get; set; }
            public string ErrorMsg { get; internal set; }

        }

        [HttpPost]
        public object GetWeightSummary(IUnitOfWork uow)
        {
            return new LoadingTripRepository().GetWeightSummary(uow.Connection);
        }




    }
}
