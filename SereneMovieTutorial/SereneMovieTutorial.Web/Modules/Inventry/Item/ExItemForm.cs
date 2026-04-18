
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.ExItem")]
     public class ExItemForm
    {
        [FileUploadEditor, Required]
        public string FileName { get; set; }
    }
}