
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.StateMaster")]
    [BasedOnRow(typeof(Entities.StateMasterRow), CheckNames = true)]
    public class StateMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String State { get; set; }
        public String StateCode { get; set; }
        public String Remarks { get; set; }
    }
}