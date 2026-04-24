
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Destination")]
    [BasedOnRow(typeof(Entities.DestinationRow), CheckNames = true)]
    public class DestinationColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [Width(80)]
        public String PlantName { get; set; }
        [Width(80)]
        public String DistictName { get; set; }
        [EditLink]
        public String Destination { get; set; }
        public String Remarks { get; set; }
    }
}