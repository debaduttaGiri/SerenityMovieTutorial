
namespace SereneMovieTutorial.Default.Forms
{
    using SereneMovieTutorial.Modules.Default.Pumpmaster;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

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