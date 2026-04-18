
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SereneMovieTutorial.Default.Entities;

    [FormScript("Default.Genre")]
    [BasedOnRow(typeof(Entities.GenreRow), CheckNames = true)]
    public class GenreForm
    {
        public String Name { get; set; }
        //[MultipleLookupEditor(typeof(DateLookup))]
        public List<string> Dates { get; set; }
    }

    [LookupScript]
    public class DateLookup : Serenity.Web.RowLookupScript<GenreRow>
    {
        public DateLookup()
        {
            IdField = "Dates";
            TextField = "Dates";
        }
    }
}