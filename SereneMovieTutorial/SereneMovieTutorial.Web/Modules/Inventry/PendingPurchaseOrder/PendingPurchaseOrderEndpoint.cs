
namespace SereneMovieTutorial.Inventry.Endpoints
{
    using SereneMovieTutorial.Inventry.Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PendingPurchaseOrderRepository;
    using MyRow = Entities.PendingPurchaseOrderRow;

    [RoutePrefix("Services/Inventry/PendingPurchaseOrder"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PendingPurchaseOrderController : ServiceEndpoint
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
        public TripResponse GetSelectedTrips(IDbConnection connection, TripRequest request)
        {
            var response = new TripResponse();
            try
            {
                request.CheckNotNull();
                var result = new MyRepository().List(connection, new ListRequest
                {
                    Criteria = new Criteria(PendingPurchaseOrderRow.Fields.DetailId.PropertyName).In(request.Ids)
                });

                response.Trips = result != null ? result.Entities : new List<MyRow>();
            }
            catch (Exception ex)
            {
                response.ErrorMsg = ex.Message;
                return response;
            }
            return response;
        }



    }
    public class TripRequest : ServiceRequest
    {
        public string[] Ids { get; set; }
        public string[] purchase { get; set; }
    }

    public class TripResponse : ServiceResponse
    {
        public List<MyRow> Trips { get; set; }
        public string ErrorMsg { get; set; }
    }
}
