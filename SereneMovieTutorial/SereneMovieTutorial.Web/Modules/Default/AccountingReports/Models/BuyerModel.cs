namespace SereneMovieTutorial.Modules.Default.AccountingReports.Models
{
    public class BuyerModel
    {
        public string BuyerName { get; set; }
        public decimal Qty { get; set; }
        public decimal Revenue { get; set; }
        public decimal Margin { get; set; }
    }
}