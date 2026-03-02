using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class CustomerVehicleReport
        {
            public const string GetCustId = "~/Views/CustomerVehicleReport/GetCustId.cshtml";
            public const string Index = "~/Views/CustomerVehicleReport/Index.cshtml";
        }

        public static class Default
        {
            public static class BranchMaster
            {
                public const string BranchMasterIndex = "~/Modules/Default/BranchMaster/BranchMasterIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Default/Customer/CustomerIndex.cshtml";
            }

            public static class CustomerMaster
            {
                public const string CustomerMasterIndex = "~/Modules/Default/CustomerMaster/CustomerMasterIndex.cshtml";
            }

            public static class Destination
            {
                public const string DestinationIndex = "~/Modules/Default/Destination/DestinationIndex.cshtml";
            }

            public static class Distict
            {
                public const string DistictIndex = "~/Modules/Default/Distict/DistictIndex.cshtml";
            }

            public static class Employees
            {
                public const string EmployeesIndex = "~/Modules/Default/Employees/EmployeesIndex.cshtml";
            }

            public static class Expense
            {
                public const string ExpenseIndex = "~/Modules/Default/Expense/ExpenseIndex.cshtml";
            }

            public static class FinancialYear
            {
                public const string FinancialYearIndex = "~/Modules/Default/FinancialYear/FinancialYearIndex.cshtml";
            }

            public static class Genre
            {
                public const string GenreIndex = "~/Modules/Default/Genre/GenreIndex.cshtml";
            }

            public static class ItemMaster
            {
                public const string ItemMasterIndex = "~/Modules/Default/ItemMaster/ItemMasterIndex.cshtml";
            }

            public static class LoadingTrip
            {
                public const string LoadingTripIndex = "~/Modules/Default/LoadingTrip/LoadingTripIndex.cshtml";
            }

            public static class Movie
            {
                public const string MovieIndex = "~/Modules/Default/Movie/MovieIndex.cshtml";
            }

            public static class Person
            {
                public const string PersonIndex = "~/Modules/Default/Person/PersonIndex.cshtml";
            }

            public static class Plant
            {
                public const string PlantIndex = "~/Modules/Default/Plant/PlantIndex.cshtml";
            }

            public static class StateMaster
            {
                public const string StateMasterIndex = "~/Modules/Default/StateMaster/StateMasterIndex.cshtml";
            }

            public static class VehicleMaster
            {
                public const string VehicleMasterIndex = "~/Modules/Default/VehicleMaster/VehicleMasterIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

