
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Tax")]
    [BasedOnRow(typeof(Entities.TaxRow), CheckNames = true)]
    public class TaxColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 TaxAmount { get; set; }
        [EditLink]
        public String Remarks { get; set; }
    }
}