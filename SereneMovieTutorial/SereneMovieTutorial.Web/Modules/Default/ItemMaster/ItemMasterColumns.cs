
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.ItemMaster")]
    [BasedOnRow(typeof(Entities.ItemMasterRow), CheckNames = true)]
    public class ItemMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public String Remarks { get; set; }
    }
}