
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Distict")]
    [BasedOnRow(typeof(Entities.DistictRow), CheckNames = true)]
    public class DistictForm
    {
        public Int32 Plant { get; set; }
        public String Distict { get; set; }
        public String Remarks { get; set; }
    }
}