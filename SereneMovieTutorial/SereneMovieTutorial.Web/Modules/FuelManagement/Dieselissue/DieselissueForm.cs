
namespace SereneMovieTutorial.FuelManagement.Forms
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("FuelManagement.Dieselissue")]
    [BasedOnRow(typeof(Entities.DieselissueRow), CheckNames = true)]
    public class DieselissueForm
    {
        [DisplayName("Vehicle Number"), HalfWidth, LookupEditor(typeof(Default.Entities.VehicleMasterRow))]
        public Int32 VehicleId { get; set; }

        [LookupEditor(typeof(Default.Entities.LoadingTripRow)), HalfWidth, DisplayName("Trip No")]
        public Int32 Tripno { get; set; }
        [ReadOnly(true), HalfWidth]
        public Int32 Plant { get; set; }
        [ReadOnly(true), HalfWidth]
        public Int32 Distict { get; set; }
        [ReadOnly(true), HalfWidth]
        public Int32 Destination { get; set; }

        [LookupEditor(typeof(PumpmasterRow)), HalfWidth]

        public Int32 Pumpid { get; set; }
        [HalfWidth, ReadOnly(true)]
        public Decimal Stock { get; set; }


        [HalfWidth, DisplayName("Issue Date")]

        public DateTime Today { get; set; }
        [HalfWidth, DisplayName("Rate/Ltr"), ReadOnly(true)]
        public Decimal Rateofdiesel { get; set; }

        [HalfWidth, DisplayName("Quantity")]
        public Decimal Diesel { get; set; }

        [ReadOnly(true), HalfWidth, DisplayName("Total Ammount")]
        public Decimal Totalprice { get; set; }

    }
}