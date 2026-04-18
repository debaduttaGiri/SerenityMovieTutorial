
namespace SereneMovieTutorial.FuelManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("FuelManagement.FuelDetails")]
    [BasedOnRow(typeof(Entities.FuelDetailsRow), CheckNames = true)]
    public class FuelDetailsForm
    {
        public Int32 PumpId { get; set; }


        public string TankerNo { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Quantity { get; set; }
    }
}