
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventry.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow), CheckNames = false)]
    public class PurchaseOrderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        [Width(80)]
        public String PoNo { get; set; }
        [Width(150)]
        [EditLink]
        public string PartyName { get; set; }
        [EditLink]
        public string BranchName { get; set; }
        [EditLink]
        public DateTime OrderDate { get; set; }
        public String Remarks { get; set; }
        [Width(140)]
        public DateTime CreatedDate { get; set; }
        [Width(80)]
        public string CreatedByUsername { get; set; }
        [Width(140)]
        public DateTime UpdateDate { get; set; }
        [Width(80)]
        public string UpdatedByUsername { get; set; }
        
    }
}