
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.PurchaseBillDetail")]
    [BasedOnRow(typeof(Entities.PurchaseBillDetailRow), CheckNames = true)]
    public class PurchaseBillDetailForm
    {
        public Int32 PurchaseBillId { get; set; }

        public Int32? PurchaseOrderId { get; set; }
        public Int32 ItemId { get; set; }
        public String ItemName { get; set; }
        public Decimal Quantity { get; set; }
        public Decimal CurrentRate { get; set; }
        public Decimal PreviousRate { get; set; }
        public Decimal Discount { get; set; }
        public Decimal TaxableAmount { get; set; }
        public Decimal CgstRate { get; set; }
        public Decimal SgstRate { get; set; }
        public Decimal IgstRate { get; set; }
        public Decimal CgstAmount { get; set; }
        public Decimal SgstAmount { get; set; }
        public Decimal IgstAmount { get; set; }
        public Decimal TotalAmount { get; set; }
        public String Remarks { get; set; }
    }
}