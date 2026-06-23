
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.IssueDetails")]
    [BasedOnRow(typeof(Entities.IssueDetailsRow), CheckNames = false)]
    public class IssueDetailsForm
    {
        [Hidden]
        public Int32? ItemId { get; set; }
        [Hidden]
        public Int32 IssueId { get; set; }
        [LookupEditor("Inventry.ItemNumber")]
        public Int32? PartNumber { get; set; }

        [LookupEditor("Inventry.ItemName")]
        public Int32? PartName { get; set; }
        public String Company { get; set; }
        [ReadOnly(true)]
        public Decimal Rate { get; set; }
        public Int32 Qty { get; set; }
        [ReadOnly(true)]
        public Decimal PartAmount { get; set; }
        [ReadOnly(true)]
        public decimal StockAsOnDate { get; set; }
        [ReadOnly(true)]
        public Int32 TotalStock { get; set; }
    }
}