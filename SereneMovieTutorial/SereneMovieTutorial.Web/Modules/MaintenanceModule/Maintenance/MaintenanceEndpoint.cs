
namespace SereneMovieTutorial.MaintenanceModule.Endpoints
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    //using System.Linq;
    using System.Web.Mvc;
    
    using MyRepository = Repositories.MaintenanceRepository;
    using MyRow = Entities.MaintenanceRow;

    [RoutePrefix("Services/MaintenanceModule/Maintenance"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MaintenanceController : ServiceEndpoint
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
        public GetVehicleDetailsResponse GetDetails(IDbConnection connection, GetVehicleDetailsRequest request)
        {
            var response = new GetVehicleDetailsResponse
            {
                Vehicle = new VehicleMasterRow()
            };

            var vehicle = connection.TryById<VehicleMasterRow>(request.VehicleId);

            if (vehicle != null)
            {
                response.Vehicle.VehicleType = vehicle.VehicleType;
                response.Vehicle.CustomerId = vehicle.CustomerId;
                response.Vehicle.Model = vehicle.Model;
            }

            return response;
        }

        [HttpPost]
        public GetLatestMaintenanceResponse GetLatestMaintenance(
     IDbConnection connection,
     GetLatestMaintenanceRequest request)
        {
            if (request.TruckId == null || request.HeadId == null)
                throw new ArgumentNullException("TruckId and HeadId required");

            var result = connection.Query<DateTime?>(@"
    SELECT MAX(EntryDate)
    FROM Maintenance
    WHERE TruckId = @truckId AND HeadId = @headId",
     new { truckId = request.TruckId, headId = request.HeadId })
     .FirstOrDefault();

            return new GetLatestMaintenanceResponse
            {
                LastMaintenance = result
            };
        }
    }
    public class GetVehicleDetailsRequest : ServiceRequest
    {
        public int? VehicleId { get; set; }
    }
    public class GetVehicleDetailsResponse : ServiceResponse
    {
        public VehicleMasterRow Vehicle { get; set; }
        
    }
    public class GetLatestMaintenanceRequest : ServiceRequest
    {
        public int? TruckId { get; set; }
        public int? HeadId { get; set; }
    }
    public class GetLatestMaintenanceResponse : ServiceResponse
    {
        public DateTime? LastMaintenance { get; set; }
    }

}
