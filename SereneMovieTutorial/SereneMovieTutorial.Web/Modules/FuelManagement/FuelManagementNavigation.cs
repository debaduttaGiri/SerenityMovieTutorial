using Serenity.Navigation;
using MyPages = SereneMovieTutorial.FuelManagement.Pages;

[assembly: NavigationLink(int.MaxValue, "Fuel Management/Fuel Data", typeof(MyPages.FuelDataController), icon: "fa fa-database")]
//[assembly: NavigationLink(int.MaxValue, "FuelManagement/Fuel Details", typeof(MyPages.FuelDetailsController), icon: "fa fa-table")]
[assembly: NavigationLink(int.MaxValue, "Fuel Management/Diesel issue", typeof(MyPages.DieselissueController), icon: " fa-recycle")]
[assembly: NavigationMenu(int.MaxValue, "Fuel Management/Reports", icon: "fa fa-table")]
[assembly: NavigationLink(
    int.MaxValue,
    "Fuel Management/Reports/Fuel Report",
    url: "~/Reports/FuelStock/fuel-stock-report",
    permission: "*",
        icon: "fas fa-file"
)]