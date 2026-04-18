
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [ColumnsScript("Default.UnloadTrip")]
    [BasedOnRow(typeof(Entities.UnloadTripRow), CheckNames = false)]
    public class UnloadTripColumns
    {
        //[Width(50)]
        //[AlignCenter]
        //[DisplayName("")]
        ////[Formatter(typeof(DownloadFormatter))]
        //[DownloadFormatter]
        //public String Download { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 UnloadTripId { get; set; }
        [EditLink]
        
        public String TripNo { get; set; }
        public DateTime TripDate { get; set; }
        public String Plant { get; set; }
        public String District { get; set; }
        public String Destination { get; set; }
        public String VehicleName { get; set; }
        public String CustomerName { get; set; }
        public String Branch { get; set; }
        public String State { get; set; }
        [Width(70)]
        public String Item { get; set; }
        public Decimal Weight { get; set; }
        public Int32 Wheels { get; set; }
        public Decimal ExpenseAmount { get; set; }
        public Decimal UnloadWeight { get; set; }
        public DateTime UnloadDate { get; set; }
        [Width(100)]
        public String CreatedByUsername { get; set; }
        [Width(140), DisplayFormat("dd-MM-yyyy HH:mm:ss"), DisplayName("CreatedDate")]
        public DateTime CreateDate { get; set; }
        [Width(100)]
        public String UpdatedByUsername { get; set; }
        [Width(140), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime UpdatedDate { get; set; }
        public String Remarks { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
    }
}