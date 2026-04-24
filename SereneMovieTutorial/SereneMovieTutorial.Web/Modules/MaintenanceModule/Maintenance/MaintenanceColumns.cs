
namespace SereneMovieTutorial.MaintenanceModule.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("MaintenanceModule.Maintenance")]
    [BasedOnRow(typeof(Entities.MaintenanceRow), CheckNames = false)]
    public class MaintenanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(100)]
        public Int32 EntryNumber { get; set; }
        public DateTime EntryDate { get; set; }
        [EditLink]
        [Width(80)]
        public String Head { get; set; }
        [EditLink]
        [Width(100)]
        public string TruckNumber { get; set; }
        [EditLink]
        [Width(80)]
        public Int32 TruckType { get; set; }
        [EditLink]
        [Width(80)]
        public string ModelNumber { get; set; }
        [EditLink]
        [Width(120)]
        public String CustomerName { get; set; }
        [Width(80)]
        public DateTime LastMaintenance { get; set; }
        [Width(80)]

        public String PeriodTill { get; set; }
        [Width(100)]
        public Int32 EstimatedPeriod { get; set; }
        [Width(80)]
        public DateTime DueDate { get; set; }
        [Width(80)]
        public String Narration { get; set; }


    }
}