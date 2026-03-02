
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Plant")]
    [BasedOnRow(typeof(Entities.PlantRow), CheckNames = true)]
    public class PlantForm
    {
        public String Plant { get; set; }
        public String Remarks { get; set; }
    }
}