
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.PendingTripDetailsInvoice")]
    [BasedOnRow(typeof(Entities.PendingTripDetailsInvoiceRow), CheckNames = true)]
    public class PendingTripDetailsInvoiceForm
    {
        public String TripNo { get; set; }
        public DateTime TripDate { get; set; }
        public Int32 PlantId { get; set; }
        public String PlantName { get; set; }
        public Int32 DistrictId { get; set; }
        public String DistrictName { get; set; }
        public Int32 DestinationId { get; set; }
        public String DestinationName { get; set; }
        public Int32 VehicleId { get; set; }
        public String VehicleNumber { get; set; }
        public Int32 CustomerId { get; set; }
        public String CustomerName { get; set; }
        public Int32 BranchId { get; set; }
        public String BranchName { get; set; }
        public Int32 StateId { get; set; }
        public String StateName { get; set; }
        public Int32 ItemId { get; set; }
        public String ItemName { get; set; }
        public Decimal Weight { get; set; }
        public Int32 Wheels { get; set; }
        public Int32 FreightRate { get; set; }
        public Decimal ExpenseAmount { get; set; }
        public String Remarks { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime Createdate { get; set; }
        public Int32 Createdby { get; set; }
        public Int32 Updatedby { get; set; }
        public DateTime Updateddate { get; set; }
    }
}