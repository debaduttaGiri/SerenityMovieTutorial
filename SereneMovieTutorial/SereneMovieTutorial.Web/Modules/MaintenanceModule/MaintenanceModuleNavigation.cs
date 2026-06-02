using Serenity.Navigation;
using MyPage = SereneMovieTutorial.Default.Pages;
using MyPages = SereneMovieTutorial.MaintenanceModule.Pages;
[assembly: NavigationMenu(int.MaxValue - 1, "MaintenanceModule", icon: "fa fa-star")]
[assembly: NavigationLink(int.MaxValue, "MaintenanceModule/Head", typeof(MyPage.MaintenanceHeadController), icon: "fa fa-cube")]
[assembly: NavigationLink(int.MaxValue, "MaintenanceModule/Maintenance", typeof(MyPages.MaintenanceController), icon: "fa fa-address-book")]
[assembly: NavigationLink(int.MaxValue, "MaintenanceModule/Reports", url: "~/Reports/Maintenance", permission: "*", icon: "fa-check-circle-o")]