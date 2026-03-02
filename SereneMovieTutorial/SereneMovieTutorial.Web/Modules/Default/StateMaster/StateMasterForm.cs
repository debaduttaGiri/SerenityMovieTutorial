
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.StateMaster")]
    [BasedOnRow(typeof(Entities.StateMasterRow), CheckNames = true)]
    public class StateMasterForm
    {
        public String State { get; set; }
        public String StateCode { get; set; }
        public String Remarks { get; set; }
    }
}