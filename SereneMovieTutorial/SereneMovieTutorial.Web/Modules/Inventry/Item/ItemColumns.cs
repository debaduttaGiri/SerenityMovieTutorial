
namespace SereneMovieTutorial.Inventry.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventry.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        [DisplayName("Part No.")]
        public String Partnumber { get; set; }
        [DisplayName("Part Name")]
        public String Partname { get; set; }
        [DisplayName("Opening Stock"),Width(100)]
        public Int32 Openingstock { get; set; }
        public Decimal Rate { get; set; }
        [DisplayName("Stock Level Min."),Width(120)]
        public Decimal Stocklvlminimum { get; set; }
        [DisplayName("Max.")]
        public Decimal Stocklvlmaximum { get; set; }
        [DisplayName("Purchase Stock"),Width(100)]
        public Decimal Purchasestock { get; set; }
        [DisplayName("Gross Price"),Width(80)
       ]
        public Decimal GrossPrice { get; set; }
        [DisplayName("Balance Stock"), Width(100)]
        public Decimal Balancestock { get; set; }
        [DisplayName("Created By")]
       
        [Width(140)]
        public DateTime Createdat { get; set; }
        [Width(80)]
        public string CreatedByUsername { get; set; }
        [Width(140)]
        public DateTime Updatedat { get; set; }
        [Width(80)]
        public string UpdatedByUsername { get; set; }
    }
}