
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.ItemMaster")]
    [BasedOnRow(typeof(Entities.ItemMasterRow), CheckNames = true)]
    public class ItemMasterForm
    {
        public String ItemName { get; set; }
        public String Remarks { get; set; }
    }
}