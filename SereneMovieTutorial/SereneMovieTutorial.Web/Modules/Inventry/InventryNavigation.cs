using Serenity.Navigation;
using MyPages = SereneMovieTutorial.Inventry.Pages;

[assembly: NavigationMenu(int.MaxValue - 1, "Inventory", icon: "fa fa-address-book")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Item", typeof(MyPages.ItemController), icon: "fa fa-star")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Order", typeof(MyPages.PurchaseOrderController), icon: "fab fa-connectdevelop")]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Request Detail", typeof(MyPages.PurchaseRequestDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Pending Purchase Order", typeof(MyPages.PendingPurchaseOrderController), icon: "fab fa-angellist")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Bill", typeof(MyPages.PurchaseBillController), icon: "fa-shopping-cart")]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Bill Detail", typeof(MyPages.PurchaseBillDetailController), icon: "fa-list-alt")]