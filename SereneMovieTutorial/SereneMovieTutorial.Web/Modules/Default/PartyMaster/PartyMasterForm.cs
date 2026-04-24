
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.PartyMaster")]
    [BasedOnRow(typeof(Entities.PartyMasterRow), CheckNames = true)]
    public class PartyMasterForm
    {
        public String Name { get; set; }
        public String Email { get; set; }
        public String PhoneNumber { get; set; }
        public String Gst { get; set; }
        public String Pan { get; set; }
        public Int32 StateId { get; set; }
        public String Address { get; set; }
    }
}