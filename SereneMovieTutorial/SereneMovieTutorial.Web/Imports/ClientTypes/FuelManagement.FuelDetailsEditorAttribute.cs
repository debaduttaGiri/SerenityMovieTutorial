using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.FuelManagement
{
    public partial class FuelDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.FuelManagement.FuelDetailsEditor";

        public FuelDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

