
namespace SereneMovieTutorial.MaintenanceModule.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MaintenanceModule.Maintenance")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = false)]
    public class MaintenanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public Int32 EntryNumber { get; set; }
        public DateTime EntryDate { get; set; }
        [EditLink]
        public String Head { get; set; }
        [EditLink]
        public string TruckNumber { get; set; }
        [EditLink]
        public Int32 TruckType { get; set; }
        [EditLink]
        public string ModelNumber { get; set; }
        [EditLink]
        public String CustomerName { get; set; }
        public DateTime LastMaintenance { get; set; }
       
        public String PeriodTill { get; set; }
        public Int32 EstimatedPeriod { get; set; }
        public DateTime DueDate { get; set; }
        public String Narration { get; set; }
        
       
    }
}