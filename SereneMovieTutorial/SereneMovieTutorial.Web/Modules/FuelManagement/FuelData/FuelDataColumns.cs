
namespace SereneMovieTutorial.FuelManagement.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("FuelManagement.FuelData")]
    [BasedOnRow(typeof(Entities.FuelDataRow), CheckNames = true)]
    public class FuelDataColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String InwardNo { get; set; }
        public String InvoiceNo { get; set; }
        public DateTime InvoiceDate { get; set; }
        public String TankerNo { get; set; }
        public Decimal QtyKl { get; set; }
        public Decimal RateKl { get; set; }
        public Decimal QuantityLtr { get; set; }
        public Decimal BasicAmount { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal RateLtr { get; set; }
        public Decimal TransportationRate { get; set; }
        public Decimal TransportationAmt { get; set; }
        public Decimal ShortageKl { get; set; }
        public Decimal ShortageLtr { get; set; }
        public Decimal ShortageAmt { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Int32 TransporterId { get; set; }
        public Int32 PartyId { get; set; }
        public Boolean TdsPayable { get; set; }
        public Int32 TdsAccountId { get; set; }
        public String TdsSection { get; set; }
        public Decimal TdsPercent { get; set; }
        public Decimal TdsAmount { get; set; }
        public Int32 DrAccountId { get; set; }
        public Int32 ShortageDrAccount { get; set; }
        public Int32 ShortageCrAccount { get; set; }
    }
}