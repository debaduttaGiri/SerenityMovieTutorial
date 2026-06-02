
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.VPoApprove")]
    [BasedOnRow(typeof(Entities.VPoApproveRow), CheckNames = true)]
    public class VPoApproveForm
    {
        public String PoNo { get; set; }
        public DateTime OrderDate { get; set; }
        public Int32 PartyId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public Int32 UpdatedBy { get; set; }
        public DateTime UpdateDate { get; set; }
        public Boolean Status { get; set; }
    }
}