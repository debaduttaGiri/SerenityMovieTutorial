using Serenity.ComponentModel;
using Serenity.Web;

namespace SereneMovieTutorial.Default
{
    [FormScript("Default.MovieCast")]
    [BasedOnRow(typeof(Entities.MovieCastRow), CheckNames = true)]
    public class MovieCastForm
    {
        [LookupEditor("Default.Person", InplaceAdd = true)]
        public int PersonId { get; set; }
        public string Character { get; set; }
    }
}