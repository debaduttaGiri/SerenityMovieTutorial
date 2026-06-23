
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventry.IssueDetails")]
    [BasedOnRow(typeof(Entities.IssueDetailsRow), CheckNames = true)]
    public class IssueDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"),Hidden]
        public Int32 DetailId { get; set; }
        [Hidden]
        public String IssueIssueNo { get; set; }
        [EditLink]
        public String Partname { get; set; }
        public String Partnumber { get; set; }
        public String Company { get; set; }
        public Decimal Rate { get; set; }
        public Int32 Qty { get; set; }
        public Decimal PartAmount { get; set; }
        [Width(150)]
        public decimal StockAsOnDate { get; set; }
        [Width(120)]
        public Int32 TotalStock { get; set; }
        public Int32? ItemId { get; set; }
    }
}