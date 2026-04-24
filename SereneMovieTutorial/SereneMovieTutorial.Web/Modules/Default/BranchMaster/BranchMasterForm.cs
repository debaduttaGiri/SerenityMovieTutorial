
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.BranchMaster")]
    [BasedOnRow(typeof(Entities.BranchMasterRow), CheckNames = true)]
    public class BranchMasterForm
    {
        public String BranchName { get; set; }
        public String BranchCode { get; set; }
        public String GstNo { get; set; }
        public String PanNo { get; set; }
        public Int32 PhoneNumber { get; set; }
        public Int32 PinCode { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Address { get; set; }
        //public String State { get; set; }
        [LookupEditor(typeof(Entities.StateMasterRow), InplaceAdd = true)]
        //[LookupEditor("Default.Person", InplaceAdd = true)]
        public Int32 StateId { get; set; }
        public String Remarks { get; set; }
        //public Int32 StateId { get; set; }
    }
}