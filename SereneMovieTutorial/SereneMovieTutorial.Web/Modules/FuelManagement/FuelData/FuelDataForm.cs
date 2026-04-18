
namespace SereneMovieTutorial.FuelManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.FuelManagement.Entities;
    using System.ComponentModel.DataAnnotations.Schema;
    using SereneMovieTutorial.Modules.FuelManagement.FuelData;

    [FormScript("FuelManagement.FuelData")]
    [BasedOnRow(typeof(Entities.FuelDataRow), CheckNames = false)]
    public class FuelDataForm
    {
        [Category("Invoice")]
        [OneThirdWidth,ReadOnly(true)]
        public String InwardNo { get; set; }
        [OneThirdWidth]
        public String InvoiceNo { get; set; }
        [OneThirdWidth]
        [DefaultValue("today")]
        public DateTime InvoiceDate { get; set; } 
        [Category("Stock")]
        [OneThirdWidth]
        public String TankerNo { get; set; }
        [OneThirdWidth]
        public Decimal QtyKl { get; set; }
        [OneThirdWidth,ReadOnly(true)]
        public Decimal RateKl { get; set; }
        
        [OneThirdWidth]
        public Decimal BasicAmount { get; set; }
        [OneThirdWidth]
        public Decimal TotalAmount { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Decimal QuantityLtr { get; set; }
        [OneThirdWidth,ReadOnly(true)]
        public Decimal RateLtr { get; set; }
        [OneThirdWidth]
        public Decimal TransportationRate { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Decimal TransportationAmt { get; set; }
        [OneThirdWidth]
        public Decimal ShortageKl { get; set; }
        [OneThirdWidth]
        public Decimal ShortageLtr { get; set; }
        [OneThirdWidth, ReadOnly(true)]
        public Decimal ShortageAmt { get; set; }
        [OneThirdWidth]
        [DefaultValue("today")]
        public DateTime ReceiptDate { get; set; }
        [Category("Finance")]
        [OneThirdWidth]
        public Int32 TransporterId { get; set; }
        [OneThirdWidth]
        public Int32 PartyId { get; set; }
        [OneThirdWidth]
        public Boolean TdsPayable { get; set; }
        [OneThirdWidth]
        public Int32 TdsAccountId { get; set; }
        [OneThirdWidth]
        public String TdsSection { get; set; }
        [OneThirdWidth]
        public Decimal TdsPercent { get; set; }
        [OneThirdWidth]
        public Decimal TdsAmount { get; set; }
        [OneThirdWidth]
        public Int32 DrAccountId { get; set; }
        [OneThirdWidth]
        public Int32 ShortageDrAccount { get; set; }
        [OneThirdWidth]
        public Int32 ShortageCrAccount { get; set; }

        [DisplayName("Show Fuel Details")]
        [EnumEditor]
        public YesNo? ShowFuelDetails { get; set; } 

        [Category("Fuel Details")]
        //[EditorType("SereneMovieTutorial.FuelManagement.FuelDetailsEditor")]
        [FuelDetailsEditor]
        
        public List<FuelDetailsRow> FuelDetails { get; set; }

        [DisplayName("Allotted Quantity")]
        [ReadOnly(true)]
        
        public Decimal? AllottedQuantity { get; set; }
    }
}