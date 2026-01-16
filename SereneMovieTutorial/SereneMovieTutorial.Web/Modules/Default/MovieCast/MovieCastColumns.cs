using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneMovieTutorial.Default.Columns
{
    [ColumnsScript("Default.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow), CheckNames = true)]
    public class MovieCastColumns
    {

        [DisplayName("Actor/Actress")]
        public String PersonFullName { get; set; }
        public String Character { get; set; }




    }
}