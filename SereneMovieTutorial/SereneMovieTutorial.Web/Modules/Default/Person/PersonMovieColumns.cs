using SereneMovieTutorial.Default.Entities;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Default.Person
{
    [ColumnsScript("Default.PersonMovie")]
    [BasedOnRow(typeof(Entities.MovieCastRow))]
    public class PersonMovieColumns
    {
        [Width(220)]
        public string MovieTitle { get; set; }
        [Width(100)]
        public int MovieYear { get; set; }
        [Width(200)]
        public string Character { get; set; }
    }
}