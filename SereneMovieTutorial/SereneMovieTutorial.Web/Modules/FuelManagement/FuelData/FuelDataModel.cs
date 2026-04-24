using SereneMovieTutorial.Default.Entities;
using SereneMovieTutorial.FuelManagement.Entities;

namespace SereneMovieTutorial.FuelManagement.Pages
{
    internal class FuelDataModel
    {
        public FuelDataRow FuelData { get; set; }
        public FuelDetailsRow fuelDetails { get; set; }

        public PumpmasterRow pumpMaster { get; set; }
    }
}