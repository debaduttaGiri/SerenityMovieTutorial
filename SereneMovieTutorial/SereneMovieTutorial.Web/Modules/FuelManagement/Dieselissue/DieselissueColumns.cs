
namespace SereneMovieTutorial.FuelManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FuelManagement.Dieselissue")]
    [BasedOnRow(typeof(Entities.DieselissueRow), CheckNames = false)]
    public class DieselissueColumns
    {
        [EditLink, DisplayName("Trip number"), Width(100)]
        public String TripNumber { get; set; }
        [ Width(130)]
        public String Vehiclenumber { get; set; }

        [Width(100)]
        public String PlantName { get; set; }

        [Width(120)]
        public String DistrictName { get; set; }

        [Width(120)]
        public String DestinationName { get; set; }

        [Width(100)]
        public String PumpName { get; set; }

        [Width(80)]
        public Decimal Diesel { get; set; }

        [Width(80)]
        public decimal Stock { get; set; }

        [Width(110)]
        public DateTime Today { get; set; }

        [Width(100)]
        public Decimal Rateofdiesel { get; set; }

        [Width(110),DisplayName("Rate/Ltr")]
        public Decimal Totalprice { get; set; }
        [Width(100)]
        public String CreatedByUsername { get; set; }
        [Width(140), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDate { get; set; }
        [Width(100)]
        public String UpdatedByUsername { get; set; }
        [Width(140), DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime UpdatedDate { get; set; }
    }
}