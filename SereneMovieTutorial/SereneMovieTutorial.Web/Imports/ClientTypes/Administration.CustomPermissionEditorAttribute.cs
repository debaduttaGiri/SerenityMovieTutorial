using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Administration
{
    public partial class CustomPermissionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Administration.CustomPermissionEditor";

        public CustomPermissionEditorAttribute()
            : base(Key)
        {
        }

        public Boolean ShowRevoke
        {
            get { return GetOption<Boolean>("showRevoke"); }
            set { SetOption("showRevoke", value); }
        }
    }
}

