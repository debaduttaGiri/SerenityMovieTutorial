
namespace SereneMovieTutorial.Default.Forms
{
    using Serenity.ComponentModel;
    using System;


    [FormScript("Default.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = false)]
    public class EmployeesForm
    {
        //public int EmployeeID { get; set; }
        public String FullName { get; set; }
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