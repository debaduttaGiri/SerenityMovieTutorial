
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;

    [FormScript("Default.VehicleMaster")]
    [BasedOnRow(typeof(Entities.VehicleMasterRow), CheckNames = true)]
    public class VehicleMasterForm
    {
        public String VehicleNumber { get; set; }
        public Int32Field VehicleType { get; set; }
        public String Brand { get; set; }
        public String Model { get; set; }
        public Int32 ManufacturingYear { get; set; }
        public Int32Field FuelType { get; set; }
        public String EngineNumber { get; set; }
        public String ChassisNumber { get; set; }
        public String Color { get; set; }
        public Int32 SeatingCapacity { get; set; }
        public Int32 CustomerId { get; set; }
        public DateTime InsuranceExpiryDate { get; set; }
        public Int32Field Wheels { get; set; }
        public Boolean IsActive { get; set; }
        [ReadOnly(true)]
        [DefaultValue("today")]
        public DateTime CreatedDate { get; set; }//= DateTime.Now;//DateTime.Now.Date;
    }
}