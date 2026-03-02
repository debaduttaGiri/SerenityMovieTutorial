
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Plant")]
    [BasedOnRow(typeof(Entities.PlantRow), CheckNames = true)]
    public class PlantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String Plant { get; set; }
        public String Remarks { get; set; }
    }
}