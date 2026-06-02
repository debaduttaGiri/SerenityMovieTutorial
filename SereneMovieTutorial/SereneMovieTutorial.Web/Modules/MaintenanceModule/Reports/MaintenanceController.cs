using SereneMovieTutorial.MaintenanceModule.Entities;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SereneMovieTutorial.Modules.MaintenanceModule.Reports
{
    [RoutePrefix("Reports/Maintenance")]
    [Route("{action=index}")]
    public class MaintenanceController : Controller
    {
        public ActionResult Index(
            DateTime? EntryDate,
            DateTime? LastMaintenance,
            int? HeadId,
            int? VehicleId)
        {
            var model = new List<Maintenance>();

            using (var connection = SqlConnections.NewFor<MaintenanceRow>())
            {
                var sql = @"
SELECT
    m.entrynumber AS EntryNumber,
    m.EntryDate AS entryDate,
    v.VehicleNumber AS TruckNumber,
    h.Head,
    o.FirstName + ' ' + o.LastName AS OwnerName,
    m.LastMaintenance,
    m.DueDate
FROM Maintenance m
LEFT JOIN VehicleMaster v ON v.VehicleId = m.TruckId
LEFT JOIN MaintenanceHead h ON h.Id = m.HeadId
LEFT JOIN customermaster o ON o.CustomerId = m.Owner
WHERE 1 = 1";

                if (EntryDate != null)
                    sql += " AND CAST(EntryDate AS DATE) = @EntryDate";

                if (LastMaintenance != null)
                    sql += " AND CAST(LastMaintenance AS DATE) = @LastMaintenance";

                if (HeadId != null)
                    sql += " AND HeadId = @HeadId";

                if (VehicleId != null)
                    sql += " AND VehicleId = @VehicleId";

                model = connection.Query<Maintenance>(
                    sql,
                    new
                    {
                        EntryDate,
                        LastMaintenance,
                        HeadId,
                        VehicleId
                    }).ToList();
            }

            return View("~/Modules/MaintenanceModule/Reports/MaintenanceReport.cshtml", model);
        }
    }
}