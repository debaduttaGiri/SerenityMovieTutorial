
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.Inventry.Entities;

    [FormScript("Inventry.IssueHeader")]
    [BasedOnRow(typeof(Entities.IssueHeaderRow), CheckNames = true)]
    public class IssueHeaderForm
    {
        [HalfWidth]
        public String IssueNo { get; set; }
        [HalfWidth]

        public Int32 VehicleId { get; set; }
        [HalfWidth]
        public String Owner { get; set; }
        [HalfWidth]
        public DateTime IssueDate { get; set; }

        //[ExPurchaseBillDetailEditor]
        [ExIssueDetailsEditor]
        public List<IssueDetailsRow> IssueDetails { get; set; }
    }
}