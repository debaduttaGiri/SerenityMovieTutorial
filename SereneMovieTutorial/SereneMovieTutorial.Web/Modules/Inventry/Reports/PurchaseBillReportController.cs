using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;


namespace SereneMovieTutorial.Modules.Inventry.Reports
{
    [RoutePrefix("Inventry/PurchaseBillReport"), Route("{action=index}")]
    public class PurchaseBillReportController : Controller
    {
        public ActionResult Index()
        {
            var data = new List<PurchaseBillReportModel>();

            string conStr = ConfigurationManager
               .ConnectionStrings["Default"].ConnectionString;

            using (SqlConnection con = new SqlConnection(conStr))
            {
                using (SqlCommand cmd = new SqlCommand("rpt_PurchaseBill", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();

                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        data.Add(new PurchaseBillReportModel
                        {
                            Id = Convert.ToInt32(dr["Id"]),
                            BillNo = dr["BillNo"].ToString(),
                            BillDate = Convert.ToDateTime(dr["BillDate"]),
                            PartyName = dr["PartyName"].ToString(),
                            
                        });
                    }
                }
            }


            return View("~/Modules/Inventry/Reports/Index.cshtml",data);
        }

        [HttpPost]
        [ActionName("Index")]
        public ActionResult IndexPost(DateTime? fromDate, DateTime? toDate, int? partyId)
        {
            var data = new List<PurchaseBillReportModel>();

            string conStr = ConfigurationManager
                .ConnectionStrings["Default"].ConnectionString;

            using (SqlConnection con = new SqlConnection(conStr))
            {
                using (SqlCommand cmd = new SqlCommand("rpt_PurchaseBill", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@FromDate",
                        (object)fromDate ?? DBNull.Value);

                    cmd.Parameters.AddWithValue("@ToDate",
                        (object)toDate ?? DBNull.Value);

                    cmd.Parameters.AddWithValue("@PartyId",
                        (object)partyId ?? DBNull.Value);

                    con.Open();

                    SqlDataReader dr = cmd.ExecuteReader();

                    while (dr.Read())
                    {
                        data.Add(new PurchaseBillReportModel
                        {
                            Id = Convert.ToInt32(dr["Id"]),
                            BillNo = dr["BillNo"].ToString(),
                            BillDate = Convert.ToDateTime(dr["BillDate"]),
                            PartyName = dr["PartyName"].ToString(),
                            //ItemName = dr["ItemName"].ToString(),
                            //Quantity = Convert.ToDecimal(dr["Quantity"]),
                            //CurrentRate = Convert.ToDecimal(dr["CurrentRate"]),
                            //TotalAmount = Convert.ToDecimal(dr["TotalAmount"])
                        });
                    }
                }
            }

            return View("~/Modules/Inventry/Reports/Index.cshtml", data);
        }
    }
}