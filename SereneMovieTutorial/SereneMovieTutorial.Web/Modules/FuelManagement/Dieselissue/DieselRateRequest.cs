using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SereneMovieTutorial.Modules.FuelManagement.Dieselissue
{
    public class DieselRateRequest:ServiceRequest
    {
        public DateTime  Date { get; set; }
    }
}