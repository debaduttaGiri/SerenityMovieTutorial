using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Default
{
    public partial class ExInvoiceDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneMovieTutorial.Default.ExInvoiceDetailsEditor";

        public ExInvoiceDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

