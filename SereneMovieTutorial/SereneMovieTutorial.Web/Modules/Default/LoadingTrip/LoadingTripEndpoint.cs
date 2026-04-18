
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
    using System.Web.Security;
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




        public BranchResponse GetBranch()
        {
            var response = new BranchResponse();
                // Fallback: read from FormsAuthentication cookie
                var authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
                if (authCookie != null)
                {
                    var ticket = FormsAuthentication.Decrypt(authCookie.Value);
                    if (!string.IsNullOrEmpty(ticket.UserData))
                    {
                        var parts = ticket.UserData.Split('|');
                        if (parts.Length >= 2)
                        {
                            response.BranchId = int.Parse(parts[0]);
                            response.BranchName = parts[1];
                            // optional: if you also stored financial year
                            // response.FinancialYear = parts.Length > 2 ? parts[2] : null;
                        }
                    }
                }

            return response;
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


        //[HttpPost]
        //public object GetWeightSummary(IUnitOfWork uow)
        //{
        //    return new LoadingTripRepository().GetWeightSummary(uow.Connection);
        //}
        public LoadingDetailsResponses GetLoadingTripDetails(
   IDbConnection connection, LoadingTripDetailsRequests request)
        {
            var response = new LoadingDetailsResponses();

            try
            {
                var fld = LoadingTripRow.Fields;

                var loadingTripData = connection.TryFirst<LoadingTripRow>(
                    fld.LoadingTripId == request.LoadingTripId &&
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
    public class BranchResponse : ServiceResponse
    {
        public String BranchName { get; set; }
        public int BranchId { get; set; }
    }
    public class VehicleDetailsRequest : ServiceRequest
    {
        public int VehicleId { get; set; }
    }


    public class VehicleDetailsResponse : ServiceResponse
    {
        public VehicleMasterRow Details { get; set; }
    }
    public class LoadingTripDetailsRequests : ServiceRequest
    {
        public int LoadingTripId { get; set; }
        public int VehicleId { get; set; }
    }

    public class LoadingDetailsResponses : ServiceResponse
    {
        public LoadingTripRow Details { get; set; }
        public string ErrorMsg { get; set; }
    }




}
