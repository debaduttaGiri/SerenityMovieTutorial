
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Distict")]
    [BasedOnRow(typeof(Entities.DistictRow), CheckNames = true)]
    public class DistictColumns
    {
        [EditLink, DisplayName("Id"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        public String Plant1 { get; set; }
        [EditLink]
        public String Distict { get; set; }
        public String Remarks { get; set; }
    }
}