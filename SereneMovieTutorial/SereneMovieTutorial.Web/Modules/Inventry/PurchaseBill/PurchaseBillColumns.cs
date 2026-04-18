namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Inventry.PurchaseBill")]
    [BasedOnRow(typeof(Entities.PurchaseBillRow), CheckNames = true)]
    public class PurchaseBillColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }

        [EditLink]
        public String BillNo { get; set; }

        public DateTime BillDate { get; set; }
        public DateTime StockInDate { get; set; }

        public Int32 PartyId { get; set; }
        public Int32 DebitLedgerId { get; set; }

        public String Gstin { get; set; }
        public String PoNumber { get; set; }

        public Decimal TotalBillAmount { get; set; }
        public Decimal TaxableAmount { get; set; }

        public Decimal CgstAmount { get; set; }
        public Decimal SgstAmount { get; set; }
        public Decimal IgstAmount { get; set; }

        public String TdsSection { get; set; }
        public Decimal TdsRate { get; set; }
        public Decimal TdsAmount { get; set; }

        public Decimal RoundOff { get; set; }
        public String Remarks { get; set; }

        // ✅ Added missing fields
        public Int32 LedgerTypeId { get; set; }
       // public Int32 PurchaseOrderId { get; set; }
        public Int32 TDSLedger { get; set; }
        public Int32 CgstLedger { get; set; }
        public Int32 SgstLedger { get; set; }
        public Int32 IgstLedger { get; set; }

        // For attachments, you usually don’t show raw binary in a grid.
        // Instead, you can expose a file upload column or skip it.
        //[FileUploadEditor, DisplayName("Attachments")]
        //public byte[] Attachments { get; set; }
    }
}
