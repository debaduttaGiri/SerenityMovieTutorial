
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.ItemMaster")]
    [BasedOnRow(typeof(Entities.ItemMasterRow), CheckNames = true)]
    public class ItemMasterForm
    {
        public String ItemName { get; set; }
        public String Remarks { get; set; }
    }
}