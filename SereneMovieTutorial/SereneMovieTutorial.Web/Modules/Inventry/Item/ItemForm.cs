
namespace SereneMovieTutorial.Inventry.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventry.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemForm
    {
        [DisplayName("Part Number")]
        public String Partnumber { get; set; }
        [DisplayName("Part Name")]
        public String Partname { get; set; }
        [DisplayName("Opening Stock")]
        public Int32 Openingstock { get; set; }
        public Decimal Rate { get; set; }
        [DisplayName("Stock Lvl Min.")]
        public Decimal Stocklvlminimum { get; set; }
        [DisplayName("Max.")]
        public Decimal Stocklvlmaximum { get; set; }
        [DisplayName("Purchase Stock")]
        public Decimal Purchasestock { get; set; }
        public Decimal GrossPrice { get; set; }
        [DisplayName("Balance stock")]
        public Decimal Balancestock { get; set; }
        //public Int32 Createdby { get; set; }
        //public DateTime Createdat { get; set; }
        //public Int32 Updatedby { get; set; }
        //public Int32 Updatedat { get; set; }
    }
}