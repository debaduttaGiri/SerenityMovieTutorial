
namespace SereneMovieTutorial.Default.Forms
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

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