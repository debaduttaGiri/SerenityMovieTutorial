
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity.ComponentModel;

    [FormScript("Inventry.ExItem")]
    public class ExItemForm
    {
        [FileUploadEditor, Required]
        public string FileName { get; set; }
    }
}