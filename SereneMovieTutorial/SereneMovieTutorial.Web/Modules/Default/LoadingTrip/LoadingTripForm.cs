
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.LoadingTrip")]
    [BasedOnRow(typeof(Entities.LoadingTripRow), CheckNames = true)]
    public class LoadingTripForm
    {
        [Hidden]
         public Int32 BranchId { get; set; }
        [HalfWidth]
        public String TripNo { get; set; }
        [HalfWidth]
        public DateTime TripDate { get; set; }
        [HalfWidth, DisplayName("State")]
        public Int32 StateId { get; set; }
        [HalfWidth,DisplayName("Item")]
        public Int32 ItemId { get; set; }
        [HalfWidth, DisplayName("Branch"), ReadOnly(true),Hidden]
        public String Branch { get; set; }

        [HalfWidth, DateEditor]
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        [HalfWidth, DisplayName("Plant")]
        public Int32 PlantId { get; set; }
        
        [HalfWidth, DisplayName("Vehicle")]
        public Int32 VehicleId { get; set; }
        [HalfWidth,DisplayName("District")]
        public Int32 DistrictId { get; set; }

        [HalfWidth, DisplayName("Owner"),ReadOnly(true)]
        public Int32 CustomerId { get; set; }
        [HalfWidth, DisplayName("Destination")]
        public Int32 DestinationId { get; set; }
        [HalfWidth, DisplayName("Wheels"),ReadOnly(true)]
        public Int32 Wheels { get; set; }
        [HalfWidth, DisplayName("Weight")]
        public Decimal Weight { get; set; }
        
        //[HalfWidth,DateEditor]
        //public DateTime CreatedDate { get; set; } = DateTime.Now;
        [HalfWidth, DisplayName("Expense"),ReadOnly(true)]
        public Decimal ExpenseAmount { get; set; }
        //[HalfWidth, DisplayName("Weight")]
        //public Decimal Weight { get; set; }
        [FullWidth,TextAreaEditor(Rows=3)]
        public String Remarks { get; set; }

    }
}