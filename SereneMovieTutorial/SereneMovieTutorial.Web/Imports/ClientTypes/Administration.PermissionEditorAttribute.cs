using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Administration
{
    public partial class PermissionEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Administration.PermissionEditor";

        public PermissionEditorAttribute()
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

