using SereneMovieTutorial.Modules.Default.AccountingReports.Models;

using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;

namespace SereneMovieTutorial.Modules.Default.AccountingReports
{
    [RoutePrefix("AccountingDashboard")]
    [Route("{action=Index}")]
    public class AccountingDashboardController : Controller
    {
        [Authorize, HttpGet]
        public ActionResult Index()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            {
               

                return View("~/Modules/Default/AccountingReports/AccountingDashBoard.cshtml");
            }
        }

        [HttpGet]
        [Route("GetDashboardData")]
        public JsonResult GetDashboardData()
        {
            var response = new AccountingDashboardResponse();

            try
            {
                string cs = ConfigurationManager
                    .ConnectionStrings["Default"]
                    .ConnectionString;

                using (SqlConnection connection = new SqlConnection(cs))
                {
                    connection.Open();

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardSummary", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                response.Summary = new Summary
                                {
                                    TotalDispatchRevenue = Convert.ToDecimal(reader["TotalDispatchRevenue"]),
                                    GrossMargin = Convert.ToDecimal(reader["GrossMargin"]),
                                    TotalTrips = Convert.ToInt32(reader["TotalTrips"]),
                                    TotalPermits = Convert.ToInt32(reader["TotalPermits"]),
                                    QuantityDispatched = Convert.ToDecimal(reader["QuantityDispatched"]),
                                    QuantityPermitted = Convert.ToDecimal(reader["QuantityPermitted"]),
                                    TotalVendorCost = Convert.ToDecimal(reader["TotalVendorCost"]),
                                    TdsDeductions = Convert.ToDecimal(reader["TdsDeductions"]),
                                    HSD = Convert.ToDecimal(reader["HSD"])
                                };
                            }
                        }
                    }


                    response.MineDetails = new List<MineDetails>();

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardMineDetails", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                response.MineDetails.Add(new MineDetails
                                {
                                    MineName = reader["MineName"].ToString(),
                                    MineRevenue = Convert.ToDecimal(reader["MineRevenue"]),
                                    MineGrossMargin = Convert.ToDecimal(reader["MineGrossMargin"])
                                });
                            }
                        }
                    }

                    response.BuyerDetails = new List<BuyerDetails>();

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardBuyerDetails", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                response.BuyerDetails.Add(new BuyerDetails
                                {
                                    BuyerName = reader["BuyerName"].ToString(),
                                    BuyerQty = Convert.ToDecimal(reader["BuyerQty"]),
                                    BuyerRevenue = Convert.ToDecimal(reader["BuyerRevenue"]),
                                    BuyerMargin = Convert.ToDecimal(reader["BuyerMargin"])
                                });
                            }
                        }
                    }

                    response.OutstandingReceivables = new List<OutstandingReceivable>();
                    response.VendorOutstandings = new List<VendorOutstanding>();

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardOutstandingByMine", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {

                            while (reader.Read())
                            {
                                response.OutstandingReceivables.Add(new OutstandingReceivable
                                {
                                    CustomerMineName = reader["CustomerMineName"].ToString(),
                                    ReceivableAmount = Convert.ToDecimal(reader["ReceivableAmount"])
                                });
                            }


                            if (reader.NextResult())
                            {
                                while (reader.Read())
                                {
                                    response.VendorOutstandings.Add(new VendorOutstanding
                                    {
                                        SupplierMineName = reader["SupplierMineName"].ToString(),
                                        PayableAmount = Convert.ToDecimal(reader["PayableAmount"])
                                    });
                                }
                            }
                        }
                    }

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardOperationalMetrics", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                response.OperationalMetrics = new OperationalMetrics
                                {
                                    AvgInvoiceRate = Convert.ToDecimal(reader["AvgInvoiceRate"]),
                                    AvgTripsPerPermit = Convert.ToDecimal(reader["AvgTripsPerPermit"]),
                                    AvgQtyPerPermit = Convert.ToDecimal(reader["AvgQtyPerPermit"]),
                                    AvgQtyPerTrip = Convert.ToDecimal(reader["AvgQtyPerTrip"]),
                                    RevenuePerTrip = Convert.ToDecimal(reader["RevenuePerTrip"]),
                                    MarginPerTrip = Convert.ToDecimal(reader["MarginPerTrip"]),
                                    TotalClientOutstanding = Convert.ToDecimal(reader["TotalClientOutstanding"]),
                                    TotalVendorOutstanding = Convert.ToDecimal(reader["TotalVendorOutstanding"])
                                };
                            }
                        }
                    }

                    response.MinePerformance = new List<MinePerformance>();

                    using (SqlCommand cmd = new SqlCommand("sp_AccountDashboardMinePerformance", connection))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                response.MinePerformance.Add(new MinePerformance
                                {
                                    MineName = reader["MineName"].ToString(),
                                    Margin = Convert.ToDecimal(reader["Margin"]),
                                    Util = Convert.ToDecimal(reader["Util"]),
                                    Trips = Convert.ToInt32(reader["Trips"]),
                                    Rate = Convert.ToDecimal(reader["Rate"])
                                });
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                response.ErrorMessage = ex.Message;
            }
            return Json(response, JsonRequestBehavior.AllowGet);
            
        }
    }
}