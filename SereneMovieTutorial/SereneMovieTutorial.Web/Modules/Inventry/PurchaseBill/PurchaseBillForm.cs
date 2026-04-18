namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.Inventry.Entities;

    [FormScript("Inventry.PurchaseBill")]
    [BasedOnRow(typeof(Entities.PurchaseBillRow), CheckNames = false)]
    public class PurchaseBillForm
    { 
        [OneThirdWidth, ReadOnly(true)]/*[LookupEditor(typeof(Default.Entities.PartyMasterRow))]*/
        public Int32 PartyId { get; set; }
       

        [OneThirdWidth, ReadOnly(true)]
        public Int32 DebitLedgerId { get; set; }

        [OneThirdWidth]
        public String BillNo { get; set; }

        [OneThirdWidth]
        public DateTime BillDate { get; set; } = DateTime.Today;

        [OneThirdWidth, ReadOnly(true)]
        public String Gstin { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String PoNumber { get; set; }

        [OneThirdWidth]
        public Decimal RoundOff { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal TotalBillAmount { get; set; }
        [OneThirdWidth]
        public DateTime StockInDate { get; set; } = DateTime.Today;

        [ExPurchaseBillDetailEditor]
        public List<PurchaseBillDetailRow> PurchaseDetails { get; set; }

        [ ReadOnly(true)]
        public Decimal TaxableAmount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal CgstAmount { get; set; }

        [OneThirdWidth,ReadOnly(true)]
        public Decimal SgstAmount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal IgstAmount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String TdsSection { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal TdsRate { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal TdsAmount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public String Remarks { get; set; }

        // ✅ Added missing fields
        [OneThirdWidth, ReadOnly(true)]
        public Int32 LedgerTypeId { get; set; }

        //[OneThirdWidth, ReadOnly(true)]
        //public Int32 PurchaseOrderId { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Int32 TDSLedger { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Int32 CgstLedger { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Int32 SgstLedger { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Int32 IgstLedger { get; set; }

        //[FileUploadEditor, OneThirdWidth]
        //public byte[] Attachments { get; set; }
    }
}
