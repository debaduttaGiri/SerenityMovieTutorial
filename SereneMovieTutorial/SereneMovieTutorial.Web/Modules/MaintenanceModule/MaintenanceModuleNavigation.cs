using Serenity.Navigation;
using MyPages = SereneMovieTutorial.MaintenanceModule.Pages;
[assembly: NavigationMenu(int.MaxValue - 1, "MaintenanceModule", icon: "fa fa-star")]

[assembly: NavigationLink(int.MaxValue, "MaintenanceModule/Maintenance", typeof(MyPages.MaintenanceController), icon: "fa fa-address-book")]