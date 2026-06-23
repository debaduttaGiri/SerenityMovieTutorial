using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Inventry
{
    public partial class ExIssueDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Inventry.ExIssueDetailsEditor";

        public ExIssueDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

