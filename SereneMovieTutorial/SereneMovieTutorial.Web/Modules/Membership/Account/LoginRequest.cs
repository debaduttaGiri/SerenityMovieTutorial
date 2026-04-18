
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
        [DefaultValue("Raju")]
        public string Username { get; set; } 
        [PasswordEditor, Placeholder(""), Required(true)][DefaultValue("/*--*//*")]
        public string Password { get; set; } 
        [DisplayName("Branch"), NotNull, ForeignKey("[dbo].[BranchMaster]", "Id"), LeftJoin("j"), TextualField("Branch"),Required(true)]
        [LookupEditor(typeof(BranchMasterRow))]
        [DefaultValue("1")]
        public Int32? BranchId { get; set; }
        [DisplayName("FinancialYear"),NotNull,Required(true)]
        [LookupEditor(typeof(FinancialYearRow))][DefaultValue("1")]
        public Int32? FinancialYearId { get; set; }

    }
}