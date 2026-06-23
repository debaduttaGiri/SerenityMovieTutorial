
namespace SereneMovieTutorial.Inventry.Repositories
{
    using SereneMovieTutorial.Inventry.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.IssueHeaderRow;

    public class IssueHeaderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void AfterSave()
            {
                base.AfterSave();

                foreach (var detail in Row.IssueDetails)
                {
                    if (detail.ItemId != null)
                        UpdateItemStock(detail.ItemId.Value);
                }
            }

            protected override void BeforeSave()
            {
                base.BeforeSave();

                var itemIds = new HashSet<int>();

                foreach (var detail in Row.IssueDetails)
                {
                    if (detail.ItemId == null)
                        continue;

                    if (itemIds.Contains(detail.ItemId.Value))
                    {
                        throw new ValidationError(
                            "Item '" + detail.Partname +
                            "' is already added.");
                    }

                    itemIds.Add(detail.ItemId.Value);
                }
            }

            private void UpdateItemStock(int itemId)
            {
                var item = Connection.TryById<ItemRow>(itemId);

                decimal purchaseQty = 0;
                decimal issueQty = 0;

                var purchases = Connection.List<PurchaseBillDetailRow>();

                foreach (var p in purchases)
                {
                    if (p.ItemId == itemId)
                        purchaseQty += p.Quantity ?? 0;
                }

                var issues = Connection.List<IssueDetailsRow>();

                foreach (var i in issues)
                {
                    if (i.ItemId == itemId)
                        issueQty += i.Qty ?? 0;
                }

                item.Purchasestock = purchaseQty;

                item.Balancestock =
                    (item.Openingstock ?? 0)
                    + purchaseQty
                    - issueQty;

                Connection.UpdateById(item);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}