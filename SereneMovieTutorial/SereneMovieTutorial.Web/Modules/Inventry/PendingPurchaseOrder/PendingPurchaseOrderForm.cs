
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.PendingPurchaseOrder")]
    [BasedOnRow(typeof(Entities.PendingPurchaseOrderRow), CheckNames = true)]
    public class PendingPurchaseOrderForm
    {
        public String PoNo { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 PartyId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DetailId { get; set; }
        public Int32 ItemId { get; set; }
        public String PartNo { get; set; }
        public Decimal PreviousRate { get; set; }
        public Decimal CurrentRate { get; set; }
        public Decimal Quantity { get; set; }
        public Int32 UnitId { get; set; }
        public Decimal TotalAmount { get; set; }
    }
}