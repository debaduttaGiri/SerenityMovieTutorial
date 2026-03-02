
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Destination")]
    [BasedOnRow(typeof(Entities.DestinationRow), CheckNames = true)]
    public class DestinationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        public String Plant1 { get; set; }
        public String Distict1 { get; set; }
        [EditLink]
        public String Destination { get; set; }
        public String Remarks { get; set; }
    }
}