
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.VLoadingTripDetails")]
    [BasedOnRow(typeof(Entities.VLoadingTripDetailsRow), CheckNames = true)]
    public class VLoadingTripDetailsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 LoadingTripId { get; set; }
        [EditLink]
        public String TripNo { get; set; }
        public DateTime TripDate { get; set; }
        //public Int32 PlantId { get; set; }
        public String PlantName { get; set; }
       // public Int32 DistrictId { get; set; }
        public String DistrictName { get; set; }
       // public Int32 DestinationId { get; set; }
        public String DestinationName { get; set; }
       // public Int32 VehicleId { get; set; }
        public String VehicleNumber { get; set; }
        //public Int32 CustomerId { get; set; }
        public String CustomerName { get; set; }
        //public Int32 BranchId { get; set; }
        public String BranchName { get; set; }
        //public Int32 StateId { get; set; }
        public String StateName { get; set; }
        //public Int32 ItemId { get; set; }
        public String ItemName { get; set; }
        public Decimal Weight { get; set; }
        public Int32 Wheels { get; set; }
        [Width(120)]
        public Decimal ExpenseAmount { get; set; }
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