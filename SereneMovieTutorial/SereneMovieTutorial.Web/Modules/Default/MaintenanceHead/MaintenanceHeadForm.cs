
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.MaintenanceHead")]
    [BasedOnRow(typeof(Entities.MaintenanceHeadRow), CheckNames = true)]
    public class MaintenanceHeadForm
    {
        public String Head { get; set; }
        public String Remarks { get; set; }
        public Int32 CreatedBy { get; set; }
        public Int32 UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}