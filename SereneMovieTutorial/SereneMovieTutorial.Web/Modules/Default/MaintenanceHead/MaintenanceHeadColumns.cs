
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.MaintenanceHead")]
    [BasedOnRow(typeof(Entities.MaintenanceHeadRow), CheckNames = true)]
    public class MaintenanceHeadColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Head { get; set; }
        public String Remarks { get; set; }
        public Int32 CreatedBy { get; set; }
        public Int32 UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}