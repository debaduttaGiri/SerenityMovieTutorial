using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Default
{
    public partial class MultipleDateEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Default.MultipleDateEditor";

        public MultipleDateEditorAttribute()
            : base(Key)
        {
        }
    }
}

