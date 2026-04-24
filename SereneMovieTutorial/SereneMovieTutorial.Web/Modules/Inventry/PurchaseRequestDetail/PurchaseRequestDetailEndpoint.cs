
namespace SereneMovieTutorial.Inventry.Endpoints
{
    using SereneMovieTutorial.Inventry.Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.PurchaseRequestDetailRepository;
    using MyRow = Entities.PurchaseRequestDetailRow;

    [RoutePrefix("Services/Inventry/PurchaseRequestDetail"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PurchaseRequestDetailController : ServiceEndpoint
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
        public ItempDetailsResponse GetItemDetails(IDbConnection connection, ItemDetailsRequest request)
        {
            var response = new ItempDetailsResponse();
            try
            {
                var fld = ItemRow.Fields;

                var ItemData = connection.TryFirst<ItemRow>(
                    fld.Id == request.Id
                    );

                if (ItemData != null)
                {
                    response.Details = ItemData;
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
    public class ItempDetailsResponse : ServiceResponse
    {
        public ItemRow Details { get; set; }
        public string ErrorMsg { get; set; }
    }
    public class ItemDetailsRequest : ServiceRequest
    {
        public int Id { get; set; }

    }
}

