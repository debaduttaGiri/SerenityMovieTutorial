
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.CustomerMaster")]
    [BasedOnRow(typeof(Entities.CustomerMasterRow), CheckNames = true)]
    public class CustomerMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 CustomerId { get; set; }
        [EditLink]
        public String CustomerCode { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String MobileNumber { get; set; }
        public String Email { get; set; }
        //public String VehicleNumber { get; set; }
        public String AddressLine1 { get; set; }
        public String AddressLine2 { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String Pincode { get; set; }
        public String IdentityType { get; set; }
        public String IdentityNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}