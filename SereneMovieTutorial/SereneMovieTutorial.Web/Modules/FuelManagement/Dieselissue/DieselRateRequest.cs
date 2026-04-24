using Serenity.Services;
using System;

namespace SereneMovieTutorial.Modules.FuelManagement.Dieselissue
{
    public class DieselRateRequest : ServiceRequest
    {
        public DateTime Date { get; set; }
    }
}