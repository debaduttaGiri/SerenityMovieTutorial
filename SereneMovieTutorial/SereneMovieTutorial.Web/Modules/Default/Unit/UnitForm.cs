
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow), CheckNames = true)]
    public class UnitForm
    {
        public String UnitName { get; set; }
    }
}