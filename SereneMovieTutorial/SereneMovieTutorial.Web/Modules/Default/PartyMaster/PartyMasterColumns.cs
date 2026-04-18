
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.PartyMaster")]
    [BasedOnRow(typeof(Entities.PartyMasterRow), CheckNames = false)]
    public class PartyMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Email { get; set; }
        public String PhoneNumber { get; set; }
        public String Gst { get; set; }
        public String Pan { get; set; }
      
        public string StateName { get; set; }
        public String Address { get; set; }
    }
}