
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.StateMaster")]
    [BasedOnRow(typeof(Entities.StateMasterRow), CheckNames = true)]
    public class StateMasterForm
    {
        public String State { get; set; }
        public String StateCode { get; set; }
        public String Remarks { get; set; }
    }
}