
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using System.ComponentModel.DataAnnotations.Schema;
    using SereneMovieTutorial.Default.Entities;
    using Serenity.Data.Mapping;

    [ColumnsScript("Default.LoadingTrip")]
    [BasedOnRow(typeof(Entities.LoadingTripRow), CheckNames = false)]
    public class LoadingTripColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 LoadingTripId { get; set; }
        [EditLink]
        public String TripNo { get; set; }
        [Width(150)]
        public DateTime TripDate { get; set; }
        
        public string Plant { get; set; }
        
        public string District { get; set; }
        public string Destination { get; set; }
        // public Int32 ExpenseId { get; set; }
        public Decimal ExpenseAmount { get; set; }
        public string VehicleNumber { get; set; }
        public string Customer { get; set; }
        public string Branch { get; set; }
        public string State { get; set; }
        public string ItemName { get; set; }
       
        public Decimal Weight { get; set; }
        public Int32 Wheels { get; set; }
        public String Remarks { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}