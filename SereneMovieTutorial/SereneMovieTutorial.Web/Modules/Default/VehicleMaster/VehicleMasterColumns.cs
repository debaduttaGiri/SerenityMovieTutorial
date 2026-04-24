
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.VehicleMaster")]
    [BasedOnRow(typeof(Entities.VehicleMasterRow), CheckNames = true)]
    public class VehicleMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 VehicleId { get; set; }
        [EditLink]
        public String VehicleNumber { get; set; }
        public String VehicleType { get; set; }
        public String Brand { get; set; }
        public String Model { get; set; }
        public Int32 ManufacturingYear { get; set; }
        public String FuelType { get; set; }
        public String EngineNumber { get; set; }
        public String ChassisNumber { get; set; }
        public String Color { get; set; }
        public Int32 SeatingCapacity { get; set; }
        [Hidden]
        public Int32 CustomerId { get; set; }
        public StringField CustomerName { get; set; }
        public DateTime InsuranceExpiryDate { get; set; }
        public Int32Field Wheels { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}