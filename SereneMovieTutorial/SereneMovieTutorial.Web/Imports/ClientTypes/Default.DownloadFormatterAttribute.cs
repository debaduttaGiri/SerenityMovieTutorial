using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneMovieTutorial.Default
{
    public partial class DownloadFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "SereneMovieTutorial.Default.DownloadFormatter";

        public DownloadFormatterAttribute()
            : base(Key)
        {
        }
    }
}

