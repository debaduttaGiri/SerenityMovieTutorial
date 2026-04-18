using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Inventry
{
    public partial class ExPurchaseBillDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Inventry.ExPurchaseBillDetailEditor";

        public ExPurchaseBillDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}

