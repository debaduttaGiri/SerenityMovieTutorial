
namespace SereneMovieTutorial.FuelManagement.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("FuelManagement.FuelDetails")]
    [BasedOnRow(typeof(Entities.FuelDetailsRow), CheckNames = true)]
    public class FuelDetailsColumns
    {
        [DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        [EditLink]
        public String PumpName { get; set; }
        public string TankerNo { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Quantity { get; set; }
    }
}