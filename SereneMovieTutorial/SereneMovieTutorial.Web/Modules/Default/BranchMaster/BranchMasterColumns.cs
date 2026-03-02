
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.BranchMaster")]
    [BasedOnRow(typeof(Entities.BranchMasterRow), CheckNames = true)]
    public class BranchMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String BranchName { get; set; }
        public String BranchCode { get; set; }
        public Int32 GstNo { get; set; }
        public Int32 PanNo { get; set; }
        public Int32 PhoneNumber { get; set; }
        public Int32 PinCode { get; set; }
        public String Address { get; set; }
        [DisplayName("State")]
        public String State1 { get; set; }
        public String Remarks { get; set; }
        
    }
}