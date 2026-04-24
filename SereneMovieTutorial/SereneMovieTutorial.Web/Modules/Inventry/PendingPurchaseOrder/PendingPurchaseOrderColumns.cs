
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Inventry.PendingPurchaseOrder")]
    [BasedOnRow(typeof(Entities.PendingPurchaseOrderRow), CheckNames = false)]
    public class PendingPurchaseOrderColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        //public Int32 Id { get; set; }
        [Width(60)]
        public String PoNo { get; set; }
        public DateTime OrderDate { get; set; }
        [Width(140)]
        public string Party { get; set; }
        public string BranchName { get; set; }
        //public Int32 DetailId { get; set; }
        [Width(100)]
        public String Partname { get; set; }
        [Width(80)]
        public String PartNo { get; set; }
        [Width(90)]
        public Decimal PreviousRate { get; set; }
        public Decimal CurrentRate { get; set; }
        public Decimal Quantity { get; set; }
        [Width(80)]
        public String UnitName { get; set; }
        [Width(120)]
        public Decimal TotalAmount { get; set; }
        [Width(100)]
        public Decimal BalanceStock { get; set; }

        [Width(110)]
        public Decimal BasicAmount { get; set; }

        [Width(90)]
        public Decimal CGSTRate { get; set; }

        [Width(90)]
        public Decimal SGSTRate { get; set; }

        [Width(90)]
        public Decimal IGSTRate { get; set; }

        [Width(110)]
        public Decimal StockLevelMax { get; set; }

        [Width(110)]
        public Decimal StockLevelMin { get; set; }
    }
}
