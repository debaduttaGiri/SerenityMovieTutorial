using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Modules.MaintenanceModule.Reports
{
    public class Maintenance
    {
        public string EntryNumber { get; set; }
        public DateTime entryDate { get; set; }
        public string TruckNumber { get; set; }
        public string Head { get; set; }
        public string OwnerName { get; set; }
        public DateTime? LastMaintenance { get; set; }
        public DateTime DueDate { get; set; }

    }
}