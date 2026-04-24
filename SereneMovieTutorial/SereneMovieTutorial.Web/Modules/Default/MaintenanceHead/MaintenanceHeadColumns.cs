
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.MaintenanceHead")]
    [BasedOnRow(typeof(Entities.MaintenanceHeadRow), CheckNames = true)]
    public class MaintenanceHeadColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Head { get; set; }
        public String Remarks { get; set; }
        [Width(80)]
        public String CreatedByUsername { get; set; }
        [Width(120)]
        public DateTime CreatedDate { get; set; }
        [Width(80)]
        public String UpdatedByUsername { get; set; }
        [Width(120)]
        public DateTime UpdatedDate { get; set; }
    }
}