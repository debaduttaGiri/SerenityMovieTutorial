
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.ItemMaster")]
    [BasedOnRow(typeof(Entities.ItemMasterRow), CheckNames = true)]
    public class ItemMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String ItemName { get; set; }
        public String Remarks { get; set; }
    }
}