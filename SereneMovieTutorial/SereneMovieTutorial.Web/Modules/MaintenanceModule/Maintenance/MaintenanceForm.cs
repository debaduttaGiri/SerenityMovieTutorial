
namespace SereneMovieTutorial.MaintenanceModule.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MaintenanceModule.Maintenance")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = false)]
    public class MaintenanceForm
    {
        [OneThirdWidth]
        public Int32 EntryNumber { get; set; }
        [OneThirdWidth]
        public DateTime EntryDate { get; set; }
        [OneThirdWidth]
        public Int32 HeadId { get; set; }
        [OneThirdWidth]
        public Int32 TruckId { get; set; }
        [OneThirdWidth][ReadOnly(true)]
        public Int32 TruckType { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public Int32 Owner { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public string ModelNumber { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public DateTime LastMaintenance { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public String PeriodTill { get; set; }
        [OneThirdWidth]
        public Int32 EstimatedPeriod { get; set; }
        [OneThirdWidth]
        [ReadOnly(true)]
        public DateTime DueDate { get; set; }
        
        public String Narration { get; set; }
       
        
    }
}