using SereneMovieTutorial.Default.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Modules.Default.Reports
{
    public class ManageInvoiceModel
    {
        public ManageinvoiceRow ManageinvoiceRow { get; set; }
        public LoadingTripRow LoadingTripRow { get; set; }
        public PlantRow PlantRow { get; set; }
        //public DestinationRow  DestinationRow {get;set;}

        public BranchMasterRow BranchMasterRow { get; set; }
        //public VehicleMasterRow VehicleMasterRow { get; set; }
    }
}