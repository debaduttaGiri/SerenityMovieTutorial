
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Inventry.PurchaseRequestDetail")]
    [BasedOnRow(typeof(Entities.PurchaseRequestDetailRow), CheckNames = true)]

    public class PurchaseRequestDetailForm
    {
        [HalfWidth, ReadOnly(true)]
        public String PoNo { get; set; }
        [HalfWidth, Hidden]
        public Int32 PurchaseOrderId { get; set; }
        [HalfWidth]
        public Int32 ItemId { get; set; }
        [HalfWidth, ReadOnly(true)]
        public String PartNo { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Decimal PreviousRate { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Decimal BalanceStock { get; set; }
        [HalfWidth]
        public Decimal StockLevelMax { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Decimal StockLevelMin { get; set; }
        [HalfWidth]
        public Decimal CurrentRate { get; set; }
        [HalfWidth]
        public Decimal Quantity { get; set; }
        [HalfWidth]
        public Int32 UnitId { get; set; }



        [HalfWidth, ReadOnly(true)]
        public Decimal BasicAmount { get; set; }
        [HalfWidth]
        public Decimal CgstRate { get; set; }
        [HalfWidth]
        public Decimal SgstRate { get; set; }
        [HalfWidth]
        public Decimal IgstRate { get; set; }
        [HalfWidth]
        public Decimal CgstAmount { get; set; }
        [HalfWidth]
        public Decimal SgstAmount { get; set; }
        [HalfWidth]
        public Decimal IgstAmount { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Decimal TotalAmount { get; set; }
    }
}