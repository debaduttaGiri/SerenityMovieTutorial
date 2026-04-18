
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Tax")]
    [BasedOnRow(typeof(Entities.TaxRow), CheckNames = true)]
    public class TaxForm
    {
        public Int32 TaxAmount { get; set; }
        public String Remarks { get; set; }
    }
}