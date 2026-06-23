
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventry.IssueHeader")]
    [BasedOnRow(typeof(Entities.IssueHeaderRow), CheckNames = true)]
    public class IssueHeaderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 IssueId { get; set; }
        [EditLink]
        public String IssueNo { get; set; }
        public String VehicleNumber { get; set; }
        public String Owner { get; set; }
        public DateTime IssueDate { get; set; }
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