
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Distict")]
    [BasedOnRow(typeof(Entities.DistictRow), CheckNames = true)]
    public class DistictForm
    {
        public Int32 Plant { get; set; }
        public String Distict { get; set; }
        public String Remarks { get; set; }
    }
}