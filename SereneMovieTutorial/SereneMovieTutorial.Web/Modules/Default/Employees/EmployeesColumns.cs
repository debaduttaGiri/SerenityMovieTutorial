
namespace SereneMovieTutorial.Default.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Default.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = false)]
    public class EmployeesColumns
    {
        [DisplayName("Id"), Hidden]
        public Int32 EmployeeId { get; set; }
        [EditLink]
        public String FullName { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String TitleOfCourtesy { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime HireDate { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        public String Country { get; set; }
        public String HomePhone { get; set; }
        public String Extension { get; set; }

    }
}