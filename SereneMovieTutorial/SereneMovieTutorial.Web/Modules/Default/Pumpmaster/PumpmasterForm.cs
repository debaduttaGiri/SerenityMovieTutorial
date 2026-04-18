
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.Modules.Default.Pumpmaster;

    [FormScript("Default.Pumpmaster")]
    [BasedOnRow(typeof(Entities.PumpmasterRow), CheckNames = true)]
    public class PumpmasterForm
    {
        public String Name { get; set; }
        [ReadOnly(true)]
        public Decimal Stock { get; set; }
        [DisplayName("GST No.")]
        public String Gst { get; set; }
        [DisplayName("PAN No.")]
        public String Pan { get; set; }
        
        public TypeState Type { get; set; }
        [TextAreaEditor]
        public String Address { get; set; }
    }
}