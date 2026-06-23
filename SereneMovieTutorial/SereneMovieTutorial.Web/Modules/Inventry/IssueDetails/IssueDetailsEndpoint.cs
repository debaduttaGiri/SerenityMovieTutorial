
namespace SereneMovieTutorial.Inventry.Endpoints
{
    using SereneMovieTutorial.Inventry.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.IssueDetailsRepository;
    using MyRow = Entities.IssueDetailsRow;

    [RoutePrefix("Services/Inventry/IssueDetails"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class IssueDetailsController : ServiceEndpoint
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

        public GetItemResponse GetItemDetails(IUnitOfWork uow, GetItemRequest request)
        {
            var item = uow.Connection.TryById<ItemRow>(request.ItemId);

            var p = PurchaseBillDetailRow.Fields;

            var qty = uow.Connection.List<PurchaseBillDetailRow>(q =>
            {
                q.Select(p.Quantity);

                q.Where(
                    p.ItemId == request.ItemId &&
                    p.CreatedDate >= DateTime.Today &&
                    p.CreatedDate < DateTime.Today.AddDays(1)
                );
            });

            return new GetItemResponse
            {
                Rate = item.Rate,
                BalanceStock = item.Balancestock,
                PartName = item.Partname,
                PartNumber = item.Partnumber,
                TodayStock = qty.Sum(x => x.Quantity ?? 0)
            };
        }
    }
    public class GetItemRequest : ServiceRequest
    {
        public int ItemId { get; set; }
    }
    

    public class GetItemResponse : ServiceResponse
    {
        public Decimal? Rate { get; set; }
        public Decimal? BalanceStock { get; set; }
        public String PartName { get; set; }
        public String PartNumber { get; set; }
        public Decimal TodayStock { get; set; }
    }
}
