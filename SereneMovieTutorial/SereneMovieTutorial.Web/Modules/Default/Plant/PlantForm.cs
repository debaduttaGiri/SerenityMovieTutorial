
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Plant")]
    [BasedOnRow(typeof(Entities.PlantRow), CheckNames = true)]
    public class PlantForm
    {
        public String Plant { get; set; }
        public String Remarks { get; set; }
    }
}