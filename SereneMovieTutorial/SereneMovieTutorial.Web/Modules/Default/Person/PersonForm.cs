
namespace SereneMovieTutorial.Default.Forms
{
    using SereneMovieTutorial.Modules.Default.Person;
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Person")]
    [BasedOnRow(typeof(Entities.PersonRow), CheckNames = true)]
    public class PersonForm
    {

        public String FirstName { get; set; }
        public String LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public String BirthPlace { get; set; }
        public Gender Gender { get; set; }
        public Int32 Height { get; set; }
        public string PrimaryImage { get; set; }
        public string GalleryImages { get; set; }


    }
}