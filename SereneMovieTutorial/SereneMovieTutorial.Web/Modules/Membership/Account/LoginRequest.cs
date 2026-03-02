
namespace SereneMovieTutorial.Membership
{
    using SereneMovieTutorial.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data.Mapping;
    using Serenity.Services;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        //[Placeholder("")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder(""), Required(true)]
        public string Password { get; set; }
        [DisplayName("Branch"), NotNull, ForeignKey("[dbo].[BranchMaster]", "Id"), LeftJoin("j"), TextualField("Branch"),Required(true)]
        [LookupEditor(typeof(BranchMasterRow))]
        public Int32? BranchId { get; set; }
        [DisplayName("FinancialYear"),NotNull,Required(true)]
        [LookupEditor(typeof(FinancialYearRow))]
        public Int32? FinancialYearId { get; set; }

    }
}