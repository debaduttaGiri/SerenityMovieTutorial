
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Distict")]
    [BasedOnRow(typeof(Entities.DistictRow), CheckNames = true)]
    public class DistictColumns
    {
        [EditLink, DisplayName("Id"), AlignRight, Hidden]
        public Int32 Id { get; set; }
        [EditLink, Width(80)]
        public string PlantName { get; set; }
        [EditLink]
        public String Distict { get; set; }
        public String Remarks { get; set; }
    }
}