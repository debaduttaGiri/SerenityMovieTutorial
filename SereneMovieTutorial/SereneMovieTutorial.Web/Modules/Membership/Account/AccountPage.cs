
namespace SereneMovieTutorial.Membership.Pages
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Web.Mvc;
    using System.Web.Security;

    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {
            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;


            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;

                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                {
                    string branchName; string financialYearName;


                    using (var connection = SqlConnections.NewFor<BranchMasterRow>())
                    {
                        branchName = connection
                            .ById<BranchMasterRow>(request.BranchId)
                            ?.BranchName;
                        
                    }
                    using (var connection = SqlConnections.NewFor<FinancialYearRow>())
                    {
                        financialYearName = connection
                        .ById<FinancialYearRow>(request.FinancialYearId)
                        ?.Name; 
                    }
                    Session["BranchId"] = request.BranchId;
                    Session["BranchName"] = branchName;
                    Session["FinancialYear"] = financialYearName;





                    return new ServiceResponse();
                }
                
                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }
       

    }
}