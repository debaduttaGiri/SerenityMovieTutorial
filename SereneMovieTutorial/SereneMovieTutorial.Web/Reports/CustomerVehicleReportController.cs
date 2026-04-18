using iTextSharp.text;
using iTextSharp.text.pdf;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Web.Mvc;




namespace SereneMovieTutorial.Reports
{
    [RoutePrefix("Default/Reports/CustomerVehicleReport")]
    //[Route("{action=GetCustId}")]
    public class CustomerVehicleReportController : Controller
    {
        [HttpGet]
        [Route("GetCustId")]
        public ActionResult GetCustId(int id = 0)
        {
            List<CustomerLookup> list = new List<CustomerLookup>();
            List<CustomerVehicleReportModel> list2 = new List<CustomerVehicleReportModel>();

            string conStr = ConfigurationManager
                                .ConnectionStrings["Default"]
                                .ConnectionString;

            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand("GetCode", con);
                cmd.CommandType = CommandType.StoredProcedure;

                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    list.Add(new CustomerLookup
                    {
                        Id = Convert.ToInt32(dr["CustomerId"]),
                        Code = dr["CustomerCode"].ToString()
                    });
                }
                con.Close();
            }
            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand("sp_CustomerVehicleReport", con);
                cmd.CommandType = CommandType.StoredProcedure;

                if (id != 0)
                {
                    cmd.Parameters.AddWithValue("@id", id);
                }
                else
                {
                    return View(new CustomerSelectionViewModel
                    {
                        Customers = list,
                        Vehicles = new List<CustomerVehicleReportModel>()
                    });
                }

                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    list2.Add(new CustomerVehicleReportModel
                    {
                        
                        CustomerId = Convert.ToInt32(dr["CustomerId"]),
                        CustomerCode = dr["CustomerCode"]?.ToString(),
                        FullName = dr["FullName"]?.ToString(),
                        MobileNumber = dr["MobileNumber"]?.ToString(),
                        Email = dr["Email"]?.ToString(),
                        AddressLine1 = dr["AddressLine1"]?.ToString(),
                        City = dr["City"]?.ToString(),
                        State = dr["State"]?.ToString(),
                        PinCode = dr["PinCode"]?.ToString(),
                        IdentityNumber = dr["IdentityNumber"]?.ToString(),

                        
                        DateOfBirth = dr["DateOfBirth"] as DateTime?,

                       
                        IsActive = dr["CustomerIsActive"] != DBNull.Value
                                        && Convert.ToBoolean(dr["CustomerIsActive"]),

                        
                        CreatedDate = Convert.ToDateTime(dr["CustomerCreatedDate"]),

                       
                        VehicleId = Convert.ToInt32(dr["VehicleId"]),
                        VehicleNumber = dr["VehicleNumber"]?.ToString(),
                        VehicleType = (int)dr["VehicleType"],
                        Brand = dr["Brand"]?.ToString(),
                        Model = dr["Model"]?.ToString(),


                        ManufacturingYear = dr["ManufacturingYear"] as int?,
                        SeatingCapacity = dr["SeatingCapacity"] as int?,

                        FuelType = (int)dr["FuelType"],
                        EngineNumber = dr["EngineNumber"]?.ToString(),
                        ChassisNumber = dr["ChassisNumber"]?.ToString(),
                        Color = dr["Color"]?.ToString(),

                        
                        InsuranceExpiryDate = dr["InsuranceExpiryDate"] as DateTime?,

                        
                        VehicleIsActive = dr["VehicleIsActive"] as bool?,

                        VehicleCreatedDate = Convert.ToDateTime(dr["VehicleCreatedDate"])
                    });
                }
                con.Close();
            }
            CustomerSelectionViewModel cs = new CustomerSelectionViewModel
            {
                Customers = list,
                Vehicles = list2

            };

            return View(cs);
        }

        [Route("Index")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(int id)
        {
            List<CustomerVehicleReportModel> list = new List<CustomerVehicleReportModel>();

            string conStr = ConfigurationManager
                                .ConnectionStrings["Default"]
                                .ConnectionString;

            using (SqlConnection con = new SqlConnection(conStr))
            {
                SqlCommand cmd = new SqlCommand("sp_CustomerVehicleReport", con);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);

                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    list.Add(new CustomerVehicleReportModel
                    {
                        // 🔹 Customer fields
                        CustomerId = Convert.ToInt32(dr["CustomerId"]),
                        CustomerCode = dr["CustomerCode"]?.ToString(),
                        FullName = dr["FullName"]?.ToString(),
                        MobileNumber = dr["MobileNumber"]?.ToString(),
                        Email = dr["Email"]?.ToString(),
                        AddressLine1 = dr["AddressLine1"]?.ToString(),
                        City = dr["City"]?.ToString(),
                        State = dr["State"]?.ToString(),
                        PinCode = dr["PinCode"]?.ToString(),
                        IdentityNumber = dr["IdentityNumber"]?.ToString(),

                        // ✅ Nullable DateTime
                        DateOfBirth = dr["DateOfBirth"] as DateTime?,

                        // ✅ Bool (handle DBNull)
                        IsActive = dr["CustomerIsActive"] != DBNull.Value
                                        && Convert.ToBoolean(dr["CustomerIsActive"]),

                        // ✅ CreatedDate (usually NOT NULL)
                        CreatedDate = Convert.ToDateTime(dr["CustomerCreatedDate"]),

                        // 🔹 Vehicle fields
                        VehicleId = Convert.ToInt32(dr["VehicleId"]),
                        VehicleNumber = dr["VehicleNumber"]?.ToString(),
                        VehicleType = (int)dr["VehicleType"],
                        Brand = dr["Brand"]?.ToString(),
                        Model = dr["Model"]?.ToString(),


                        ManufacturingYear = dr["ManufacturingYear"] as int?,
                        SeatingCapacity = dr["SeatingCapacity"] as int?,

                        FuelType = (int)dr["FuelType"],
                        EngineNumber = dr["EngineNumber"]?.ToString(),
                        ChassisNumber = dr["ChassisNumber"]?.ToString(),
                        Color = dr["Color"]?.ToString(),

                        // ✅ Nullable DateTime
                        InsuranceExpiryDate = dr["InsuranceExpiryDate"] as DateTime?,

                        // ✅ Nullable bool
                        VehicleIsActive = dr["VehicleIsActive"] as bool?,

                        VehicleCreatedDate = Convert.ToDateTime(dr["VehicleCreatedDate"])
                    });
                }
                con.Close();
            }

            return View(list);
        }

        
    }
}

