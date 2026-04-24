
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.UnloadTrip")]
    [BasedOnRow(typeof(Entities.UnloadTripRow), CheckNames = true)]
    public class UnloadTripForm
    {
        public Int32? LoadingTripId { get; set; }
        public String TripNo { get; set; }
        public DateTime TripDate { get; set; }
        public String Plant { get; set; }
        public String District { get; set; }
        public String Destination { get; set; }
        public String VehicleName { get; set; }
        public String CustomerName { get; set; }
        public String Branch { get; set; }
        public String State { get; set; }
        public String Item { get; set; }
        public Decimal Weight { get; set; }
        public Int32 Wheels { get; set; }
        public Decimal ExpenseAmount { get; set; }
        public Decimal UnloadWeight { get; set; }
        public DateTime UnloadDate { get; set; }
        public String Remarks { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
    }
}