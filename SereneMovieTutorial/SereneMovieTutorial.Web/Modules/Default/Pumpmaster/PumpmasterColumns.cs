
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Pumpmaster")]
    [BasedOnRow(typeof(Entities.PumpmasterRow), CheckNames = true)]
    public class PumpmasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Stock { get; set; }
        public String Gst { get; set; }
        public String Pan { get; set; }
        public Int32 Type { get; set; }
        public String Address { get; set; }
    }
}