
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Data.Mapping;

    [FormScript("Default.Destination")]
    [BasedOnRow(typeof(Entities.DestinationRow), CheckNames = true)]
    public class DestinationForm
    {
        public Int32 Plant { get; set; }
        
        public Int32 Distict { get; set; }
        public String Destination { get; set; }
        public String Remarks { get; set; }
    }
}