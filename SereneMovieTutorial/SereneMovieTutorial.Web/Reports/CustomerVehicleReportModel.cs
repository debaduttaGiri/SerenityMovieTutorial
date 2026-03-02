using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Reports
{
    public class CustomerVehicleReportModel
    {
        // 🔹 CustomerMaster fields
        public int CustomerId { get; set; }
        public string CustomerCode { get; set; }
        public string FullName { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public string AddressLine1 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public string IdentityNumber { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }

        // 🔹 VehicleMaster fields
        public int VehicleId { get; set; }
        public string VehicleNumber { get; set; }
        public int VehicleType { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int? ManufacturingYear { get; set; }
        public int FuelType { get; set; }
        public string EngineNumber { get; set; }
        public string ChassisNumber { get; set; }
        public string Color { get; set; }
        public int? SeatingCapacity { get; set; }
        public DateTime? InsuranceExpiryDate { get; set; }
        public bool? VehicleIsActive { get; set; }
        public DateTime VehicleCreatedDate { get; set; }
    }
    public class CustomerLookup
    {
        public int Id { get; set; }
        public string Code { get; set; }
    }
    public class CustomerSelectionViewModel 
    { 
        public IEnumerable<SereneMovieTutorial.Reports.CustomerLookup> Customers { get; set; } 
        public IEnumerable<SereneMovieTutorial.Reports.CustomerVehicleReportModel> Vehicles { get; set; } 
    }


}