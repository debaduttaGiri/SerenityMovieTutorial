
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.Default.Entities;

    [FormScript("Default.Manageinvoice")]
    [BasedOnRow(typeof(Entities.ManageinvoiceRow), CheckNames = false)]
    public class ManageinvoiceForm
    {
        [Tab("Invoice")]

        // ================= BASIC INFO =================
        [Category("Invoice Information")]

        [HalfWidth,ReadOnly(true)]
        public Int32 Plantid { get; set; }
        [HalfWidth, ReadOnly(true)]

        public int LoadingTripId { get; set; }

        [HalfWidth,ReadOnly(true)]
        public Int32 Branchid { get; set; }

        [HalfWidth,ReadOnly(true)]
        public Int32 Totaltrips { get; set; }

        [HalfWidth,ReadOnly(true)]
        public String Invoiceno { get; set; }

        [HalfWidth]
        public Int32 Pono { get; set; }

        [HalfWidth, DefaultValue("Today")]
        public DateTime Invoicedate { get; set; }

        [HalfWidth]
        public DateTime Fromdate { get; set; } = DateTime.Today;

        [HalfWidth]
        public DateTime Todate { get; set; } = DateTime.Today;


        // ================= TAX SECTION =================
        [Category("Taxes")]
        public Boolean Addgst { get; set; }

        [HalfWidth,ReadOnly(true)]
        public Int32 Saccode { get; set; }

        [HalfWidth, ReadOnly(true)]
        [LookupEditor("Default.Tax", InplaceAdd = true)]
        public Int32 Tax { get; set; }

        //[OneThirdWidth]
        //public Boolean Localgst { get; set; }

        [OneThirdWidth,ReadOnly(true)]
        public Decimal Cgstrate { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal Sgstrate { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal Igstrate { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal Cgstamount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal Sgstamount { get; set; }

        [OneThirdWidth, ReadOnly(true)]
        public Decimal Igstamount { get; set; }

        [FullWidth, ReadOnly(true)]
        public Decimal Totalgstamount { get; set; }

        [Category("Invoice Details")]
        [ExInvoiceDetailsEditor]
        public List<InvoicedetailsRow> InvoiceDetails { get; set; }
        // ================= TOTAL =================
        [Category("Invoice Payment Details")]

        [HalfWidth, ReadOnly(true)]
        public Decimal Totalinvoiceamount { get; set; }

        //[HalfWidth]
        //public Int32 RecipientBank { get; set; }

       



    }
}