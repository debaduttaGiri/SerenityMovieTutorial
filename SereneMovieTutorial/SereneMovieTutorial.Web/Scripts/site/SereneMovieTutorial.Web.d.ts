/// <reference path="../serenity/Serenity.CoreLib.d.ts" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SereneMovieTutorial.Administration {
}
declare namespace SereneMovieTutorial.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
}
declare namespace SereneMovieTutorial.Administration {
}
declare namespace SereneMovieTutorial.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SereneMovieTutorial.Administration {
}
declare namespace SereneMovieTutorial.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SereneMovieTutorial.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SereneMovieTutorial.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SereneMovieTutorial.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SereneMovieTutorial.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SereneMovieTutorial.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SereneMovieTutorial.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SereneMovieTutorial.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface BranchMasterForm {
        BranchName: Serenity.StringEditor;
        BranchCode: Serenity.StringEditor;
        GstNo: Serenity.StringEditor;
        PanNo: Serenity.StringEditor;
        PhoneNumber: Serenity.IntegerEditor;
        PinCode: Serenity.IntegerEditor;
        Address: Serenity.TextAreaEditor;
        StateId: Serenity.LookupEditor;
        Remarks: Serenity.StringEditor;
    }
    class BranchMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface BranchMasterRow {
        Id?: number;
        BranchName?: string;
        BranchCode?: string;
        GstNo?: string;
        PanNo?: string;
        PhoneNumber?: string;
        PinCode?: number;
        Address?: string;
        State?: string;
        Remarks?: string;
        StateId?: number;
        State1?: string;
        StateStateCode?: string;
        StateRemarks?: string;
    }
    namespace BranchMasterRow {
        const idProperty = "Id";
        const nameProperty = "BranchName";
        const localTextPrefix = "Default.BranchMaster";
        const lookupKey = "Default.BranchMaster";
        function getLookup(): Q.Lookup<BranchMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BranchName = "BranchName",
            BranchCode = "BranchCode",
            GstNo = "GstNo",
            PanNo = "PanNo",
            PhoneNumber = "PhoneNumber",
            PinCode = "PinCode",
            Address = "Address",
            State = "State",
            Remarks = "Remarks",
            StateId = "StateId",
            State1 = "State1",
            StateStateCode = "StateStateCode",
            StateRemarks = "StateRemarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace BranchMasterService {
        const baseUrl = "Default/BranchMaster";
        function Create(request: Serenity.SaveRequest<BranchMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BranchMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BranchMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BranchMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/BranchMaster/Create",
            Update = "Default/BranchMaster/Update",
            Delete = "Default/BranchMaster/Delete",
            Retrieve = "Default/BranchMaster/Retrieve",
            List = "Default/BranchMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface BranchResponse extends Serenity.ServiceResponse {
        BranchName?: string;
        BranchId?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface CustomerForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface CustomerMasterForm {
        CustomerCode: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        AddressLine1: Serenity.StringEditor;
        AddressLine2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Pincode: Serenity.StringEditor;
        IdentityType: Serenity.EnumEditor;
        IdentityNumber: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
        CreatedDate: Serenity.DateEditor;
    }
    class CustomerMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface CustomerMasterRow {
        CustomerId?: number;
        CustomerCode?: string;
        FirstName?: string;
        LastName?: string;
        MobileNumber?: string;
        Email?: string;
        AddressLine1?: string;
        AddressLine2?: string;
        City?: string;
        State?: string;
        Pincode?: string;
        IdentityType?: Modules.Default.CustomerMaster.IdentityType;
        IdentityNumber?: string;
        DateOfBirth?: string;
        IsActive?: boolean;
        CreatedDate?: string;
    }
    namespace CustomerMasterRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerCode";
        const localTextPrefix = "Default.CustomerMaster";
        const lookupKey = "Default.CustomerMaster";
        function getLookup(): Q.Lookup<CustomerMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CustomerId = "CustomerId",
            CustomerCode = "CustomerCode",
            FirstName = "FirstName",
            LastName = "LastName",
            MobileNumber = "MobileNumber",
            Email = "Email",
            AddressLine1 = "AddressLine1",
            AddressLine2 = "AddressLine2",
            City = "City",
            State = "State",
            Pincode = "Pincode",
            IdentityType = "IdentityType",
            IdentityNumber = "IdentityNumber",
            DateOfBirth = "DateOfBirth",
            IsActive = "IsActive",
            CreatedDate = "CreatedDate"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace CustomerMasterService {
        const baseUrl = "Default/CustomerMaster";
        function Create(request: Serenity.SaveRequest<CustomerMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/CustomerMaster/Create",
            Update = "Default/CustomerMaster/Update",
            Delete = "Default/CustomerMaster/Delete",
            Retrieve = "Default/CustomerMaster/Retrieve",
            List = "Default/CustomerMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface CustomerRow {
        CustomerId?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
    }
    namespace CustomerRow {
        const idProperty = "CustomerId";
        const nameProperty = "CustomerId";
        const localTextPrefix = "Default.Customer";
        const deletePermission = "Default:Customer:Delete";
        const insertPermission = "Default:Customer:Insert";
        const readPermission = "Default:Customer:View";
        const updatePermission = "Default:Customer:Modify";
        const enum Fields {
            CustomerId = "CustomerId",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace CustomerService {
        const baseUrl = "Default/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Customer/Create",
            Update = "Default/Customer/Update",
            Delete = "Default/Customer/Delete",
            Retrieve = "Default/Customer/Retrieve",
            List = "Default/Customer/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface DestinationForm {
        Plant: Serenity.LookupEditor;
        Distict: Serenity.LookupEditor;
        Destination: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class DestinationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface DestinationRow {
        Id?: number;
        Plant?: number;
        Distict?: number;
        Destination?: string;
        Remarks?: string;
        Plant1?: string;
        PlantRemarks?: string;
        DistictPlant?: number;
        Distict1?: string;
        DistictRemarks?: string;
    }
    namespace DestinationRow {
        const idProperty = "Id";
        const nameProperty = "Destination";
        const localTextPrefix = "Default.Destination";
        const lookupKey = "Default.Destination";
        function getLookup(): Q.Lookup<DestinationRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Plant = "Plant",
            Distict = "Distict",
            Destination = "Destination",
            Remarks = "Remarks",
            Plant1 = "Plant1",
            PlantRemarks = "PlantRemarks",
            DistictPlant = "DistictPlant",
            Distict1 = "Distict1",
            DistictRemarks = "DistictRemarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace DestinationService {
        const baseUrl = "Default/Destination";
        function Create(request: Serenity.SaveRequest<DestinationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DestinationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DestinationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DestinationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Destination/Create",
            Update = "Default/Destination/Update",
            Delete = "Default/Destination/Delete",
            Retrieve = "Default/Destination/Retrieve",
            List = "Default/Destination/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface DistictForm {
        Plant: Serenity.LookupEditor;
        Distict: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class DistictForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface DistictRow {
        Id?: number;
        Plant?: number;
        Distict?: string;
        Remarks?: string;
        Plant1?: string;
        PlantRemarks?: string;
    }
    namespace DistictRow {
        const idProperty = "Id";
        const nameProperty = "Distict";
        const localTextPrefix = "Default.Distict";
        const lookupKey = "Default.Distict";
        function getLookup(): Q.Lookup<DistictRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Plant = "Plant",
            Distict = "Distict",
            Remarks = "Remarks",
            Plant1 = "Plant1",
            PlantRemarks = "PlantRemarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace DistictService {
        const baseUrl = "Default/Distict";
        function Create(request: Serenity.SaveRequest<DistictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DistictRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DistictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DistictRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Distict/Create",
            Update = "Default/Distict/Update",
            Delete = "Default/Distict/Delete",
            Retrieve = "Default/Distict/Retrieve",
            List = "Default/Distict/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface EmployeesForm {
        FullName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Extension: Serenity.StringEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface EmployeesRow {
        EmployeeId?: number;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
    }
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "FullName";
        const localTextPrefix = "Default.Employees";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EmployeeId = "EmployeeId",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace EmployeesService {
        const baseUrl = "Default/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Employees/Create",
            Update = "Default/Employees/Update",
            Delete = "Default/Employees/Delete",
            Retrieve = "Default/Employees/Retrieve",
            List = "Default/Employees/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface ExpenseForm {
        Plant: Serenity.LookupEditor;
        District: Serenity.LookupEditor;
        Destination: Serenity.LookupEditor;
        Expense: Serenity.DecimalEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }
    class ExpenseForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface ExpenseRequest extends Serenity.ServiceRequest {
        PlantId?: number;
        DistrictId?: number;
        DestinationId?: number;
        Wheels?: number;
        Weight?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface ExpenseResponse extends Serenity.ServiceResponse {
        Details?: ExpenseRow;
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface ExpenseRow {
        ExpenseId?: number;
        Plant?: number;
        District?: number;
        Destination?: number;
        Expense?: number;
        Remarks?: string;
        Plant1?: string;
        PlantRemarks?: string;
        DistrictPlant?: number;
        DistrictDistict?: string;
        DistrictRemarks?: string;
        DestinationPlant?: number;
        DestinationDistict?: number;
        Destination1?: string;
        DestinationRemarks?: string;
        Weight?: number;
        Wheels?: number;
    }
    namespace ExpenseRow {
        const idProperty = "ExpenseId";
        const nameProperty = "Remarks";
        const localTextPrefix = "Default.Expense";
        const lookupKey = "Default.Expense";
        function getLookup(): Q.Lookup<ExpenseRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ExpenseId = "ExpenseId",
            Plant = "Plant",
            District = "District",
            Destination = "Destination",
            Expense = "Expense",
            Remarks = "Remarks",
            Plant1 = "Plant1",
            PlantRemarks = "PlantRemarks",
            DistrictPlant = "DistrictPlant",
            DistrictDistict = "DistrictDistict",
            DistrictRemarks = "DistrictRemarks",
            DestinationPlant = "DestinationPlant",
            DestinationDistict = "DestinationDistict",
            Destination1 = "Destination1",
            DestinationRemarks = "DestinationRemarks",
            Weight = "Weight",
            Wheels = "Wheels"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace ExpenseService {
        const baseUrl = "Default/Expense";
        function Create(request: Serenity.SaveRequest<ExpenseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpenseRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpenseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpenseRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Expense/Create",
            Update = "Default/Expense/Update",
            Delete = "Default/Expense/Delete",
            Retrieve = "Default/Expense/Retrieve",
            List = "Default/Expense/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface FinancialYearForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        NameOfInvoice: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class FinancialYearForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface FinancialYearRow {
        Id?: number;
        Name?: string;
        StartDate?: string;
        EndDate?: string;
        NameOfInvoice?: string;
        Remarks?: string;
    }
    namespace FinancialYearRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.FinancialYear";
        const lookupKey = "Default.FinancialYear";
        function getLookup(): Q.Lookup<FinancialYearRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            StartDate = "StartDate",
            EndDate = "EndDate",
            NameOfInvoice = "NameOfInvoice",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace FinancialYearService {
        const baseUrl = "Default/FinancialYear";
        function Create(request: Serenity.SaveRequest<FinancialYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinancialYearRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinancialYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinancialYearRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/FinancialYear/Create",
            Update = "Default/FinancialYear/Update",
            Delete = "Default/FinancialYear/Delete",
            Retrieve = "Default/FinancialYear/Retrieve",
            List = "Default/FinancialYear/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface GenreForm {
        Name: Serenity.StringEditor;
        Dates: Serenity.StringEditor;
    }
    class GenreForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface GenreRow {
        GenreId?: number;
        Name?: string;
        Dates?: string;
    }
    namespace GenreRow {
        const idProperty = "GenreId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Genre";
        const lookupKey = "Default.Genre";
        function getLookup(): Q.Lookup<GenreRow>;
        const deletePermission = "Administration:General:Delete";
        const insertPermission = "Administration:General:Insert";
        const readPermission = "Administration:General:Read";
        const updatePermission = "Administration:General:Modify";
        const enum Fields {
            GenreId = "GenreId",
            Name = "Name",
            Dates = "Dates"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace GenreService {
        const baseUrl = "Default/Genre";
        function Create(request: Serenity.SaveRequest<GenreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GenreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GenreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GenreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Genre/Create",
            Update = "Default/Genre/Update",
            Delete = "Default/Genre/Delete",
            Retrieve = "Default/Genre/Retrieve",
            List = "Default/Genre/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface InvoicedetailsForm {
        Challan: Serenity.IntegerEditor;
        Lrno: Serenity.StringEditor;
        Vehicleid: Serenity.IntegerEditor;
        VehicleNumber: Serenity.StringEditor;
        freightRate: Serenity.IntegerEditor;
        Weight: Serenity.DecimalEditor;
        Billingamount: Serenity.DecimalEditor;
        Invoicedate: Serenity.DateEditor;
        LoadingTripId: Serenity.IntegerEditor;
    }
    class InvoicedetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface InvoicedetailsRow {
        Id?: number;
        Challan?: number;
        Lrno?: string;
        Vehicleid?: number;
        VehicleNumber?: string;
        freightRate?: number;
        Weight?: number;
        Billingamount?: number;
        Invoicedate?: string;
        LoadingTripId?: number;
        ManageInvoiceId?: number;
    }
    namespace InvoicedetailsRow {
        const idProperty = "Id";
        const nameProperty = "Lrno";
        const localTextPrefix = "Default.Invoicedetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Challan = "Challan",
            Lrno = "Lrno",
            Vehicleid = "Vehicleid",
            VehicleNumber = "VehicleNumber",
            freightRate = "freightRate",
            Weight = "Weight",
            Billingamount = "Billingamount",
            Invoicedate = "Invoicedate",
            LoadingTripId = "LoadingTripId",
            ManageInvoiceId = "ManageInvoiceId"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace InvoicedetailsService {
        const baseUrl = "Default/Invoicedetails";
        function Create(request: Serenity.SaveRequest<InvoicedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicedetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicedetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Invoicedetails/Create",
            Update = "Default/Invoicedetails/Update",
            Delete = "Default/Invoicedetails/Delete",
            Retrieve = "Default/Invoicedetails/Retrieve",
            List = "Default/Invoicedetails/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface ItemMasterForm {
        ItemName: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class ItemMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface ItemMasterRow {
        Id?: number;
        ItemName?: string;
        Remarks?: string;
    }
    namespace ItemMasterRow {
        const idProperty = "Id";
        const nameProperty = "ItemName";
        const localTextPrefix = "Default.ItemMaster";
        const lookupKey = "Default.ItemMaster";
        function getLookup(): Q.Lookup<ItemMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            ItemName = "ItemName",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace ItemMasterService {
        const baseUrl = "Default/ItemMaster";
        function Create(request: Serenity.SaveRequest<ItemMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ItemMaster/Create",
            Update = "Default/ItemMaster/Update",
            Delete = "Default/ItemMaster/Delete",
            Retrieve = "Default/ItemMaster/Retrieve",
            List = "Default/ItemMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface LoadingDetailsResponses extends Serenity.ServiceResponse {
        Details?: LoadingTripRow;
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface LoadingTripDetailsRequests extends Serenity.ServiceRequest {
        LoadingTripId?: number;
        VehicleId?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface LoadingTripForm {
        BranchId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        StateId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        Branch: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        PlantId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        DestinationId: Serenity.LookupEditor;
        Wheels: Serenity.IntegerEditor;
        Weight: Serenity.DecimalEditor;
        freightRate: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
    }
    class LoadingTripForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface LoadingTripRow {
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        PlantId?: number;
        Plant?: string;
        DistrictId?: number;
        District?: string;
        DestinationId?: number;
        Destination?: string;
        ExpenseAmount?: number;
        VehicleId?: number;
        VehicleNumber?: string;
        CustomerId?: number;
        Customer?: string;
        BranchId?: number;
        Branch?: string;
        StateId?: number;
        State?: string;
        ItemId?: number;
        ItemName?: string;
        Weight?: number;
        freightRate?: number;
        Wheels?: number;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace LoadingTripRow {
        const idProperty = "LoadingTripId";
        const nameProperty = "TripNo";
        const localTextPrefix = "Default.LoadingTrip";
        const lookupKey = "Default.LoadingTrip";
        function getLookup(): Q.Lookup<LoadingTripRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            PlantId = "PlantId",
            Plant = "Plant",
            DistrictId = "DistrictId",
            District = "District",
            DestinationId = "DestinationId",
            Destination = "Destination",
            ExpenseAmount = "ExpenseAmount",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            CustomerId = "CustomerId",
            Customer = "Customer",
            BranchId = "BranchId",
            Branch = "Branch",
            StateId = "StateId",
            State = "State",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Weight = "Weight",
            freightRate = "freightRate",
            Wheels = "Wheels",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            CreateDate = "CreateDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace LoadingTripService {
        const baseUrl = "Default/LoadingTrip";
        function Create(request: Serenity.SaveRequest<LoadingTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LoadingTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LoadingTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LoadingTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetVehicleDetails(request: VehicleDetailsRequest, onSuccess?: (response: VehicleDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetBranch(request: Serenity.ServiceRequest, onSuccess?: (response: BranchResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetExpenseByRoute(request: ExpenseRequest, onSuccess?: (response: ExpenseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetLoadingTripDetails(request: LoadingTripDetailsRequests, onSuccess?: (response: LoadingDetailsResponses) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/LoadingTrip/Create",
            Update = "Default/LoadingTrip/Update",
            Delete = "Default/LoadingTrip/Delete",
            Retrieve = "Default/LoadingTrip/Retrieve",
            List = "Default/LoadingTrip/List",
            GetVehicleDetails = "Default/LoadingTrip/GetVehicleDetails",
            GetBranch = "Default/LoadingTrip/GetBranch",
            GetExpenseByRoute = "Default/LoadingTrip/GetExpenseByRoute",
            GetLoadingTripDetails = "Default/LoadingTrip/GetLoadingTripDetails"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface MaintenanceHeadForm {
        Head: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CreatedBy: Serenity.IntegerEditor;
        UpdatedBy: Serenity.IntegerEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedDate: Serenity.DateEditor;
    }
    class MaintenanceHeadForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface MaintenanceHeadRow {
        Id?: number;
        Head?: string;
        Remarks?: string;
        CreatedBy?: number;
        UpdatedBy?: number;
        CreatedDate?: string;
        UpdatedDate?: string;
    }
    namespace MaintenanceHeadRow {
        const idProperty = "Id";
        const nameProperty = "Head";
        const localTextPrefix = "Default.MaintenanceHead";
        const lookupKey = "Default.MaintenanceHead";
        function getLookup(): Q.Lookup<MaintenanceHeadRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Head = "Head",
            Remarks = "Remarks",
            CreatedBy = "CreatedBy",
            UpdatedBy = "UpdatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace MaintenanceHeadService {
        const baseUrl = "Default/MaintenanceHead";
        function Create(request: Serenity.SaveRequest<MaintenanceHeadRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceHeadRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceHeadRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceHeadRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/MaintenanceHead/Create",
            Update = "Default/MaintenanceHead/Update",
            Delete = "Default/MaintenanceHead/Delete",
            Retrieve = "Default/MaintenanceHead/Retrieve",
            List = "Default/MaintenanceHead/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface ManageinvoiceForm {
        Plantid: Serenity.LookupEditor;
        LoadingTripId: Serenity.LookupEditor;
        Branchid: Serenity.LookupEditor;
        Totaltrips: Serenity.IntegerEditor;
        Invoiceno: Serenity.StringEditor;
        Pono: Serenity.IntegerEditor;
        Invoicedate: Serenity.DateEditor;
        Fromdate: Serenity.DateEditor;
        Todate: Serenity.DateEditor;
        Addgst: Serenity.BooleanEditor;
        Saccode: Serenity.IntegerEditor;
        Tax: Serenity.LookupEditor;
        Cgstrate: Serenity.DecimalEditor;
        Sgstrate: Serenity.DecimalEditor;
        Igstrate: Serenity.DecimalEditor;
        Cgstamount: Serenity.DecimalEditor;
        Sgstamount: Serenity.DecimalEditor;
        Igstamount: Serenity.DecimalEditor;
        Totalgstamount: Serenity.DecimalEditor;
        InvoiceDetails: ExInvoiceDetailsEditor;
        Totalinvoiceamount: Serenity.DecimalEditor;
    }
    class ManageinvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface ManageinvoiceRow {
        Id?: number;
        Plantid?: number;
        Branchid?: number;
        Totaltrips?: number;
        Invoiceno?: string;
        Pono?: number;
        Invoicedate?: string;
        Fromdate?: string;
        Todate?: string;
        Addgst?: boolean;
        Saccode?: number;
        Tax?: number;
        Localgst?: boolean;
        Cgstrate?: number;
        Sgstrate?: number;
        Igstrate?: number;
        Cgstamount?: number;
        Sgstamount?: number;
        Igstamount?: number;
        Totalgstamount?: number;
        Totalinvoiceamount?: number;
        InvoiceDetails?: InvoicedetailsRow[];
        Plant?: string;
        Branch?: string;
        LoadingTripId?: number;
        TripNo?: string;
    }
    namespace ManageinvoiceRow {
        const idProperty = "Id";
        const nameProperty = "Invoiceno";
        const localTextPrefix = "Default.Manageinvoice";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Plantid = "Plantid",
            Branchid = "Branchid",
            Totaltrips = "Totaltrips",
            Invoiceno = "Invoiceno",
            Pono = "Pono",
            Invoicedate = "Invoicedate",
            Fromdate = "Fromdate",
            Todate = "Todate",
            Addgst = "Addgst",
            Saccode = "Saccode",
            Tax = "Tax",
            Localgst = "Localgst",
            Cgstrate = "Cgstrate",
            Sgstrate = "Sgstrate",
            Igstrate = "Igstrate",
            Cgstamount = "Cgstamount",
            Sgstamount = "Sgstamount",
            Igstamount = "Igstamount",
            Totalgstamount = "Totalgstamount",
            Totalinvoiceamount = "Totalinvoiceamount",
            InvoiceDetails = "InvoiceDetails",
            Plant = "Plant",
            Branch = "Branch",
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace ManageinvoiceService {
        const baseUrl = "Default/Manageinvoice";
        function Create(request: Serenity.SaveRequest<ManageinvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManageinvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManageinvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManageinvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Manageinvoice/Create",
            Update = "Default/Manageinvoice/Update",
            Delete = "Default/Manageinvoice/Delete",
            Retrieve = "Default/Manageinvoice/Retrieve",
            List = "Default/Manageinvoice/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface MovieCastForm {
        PersonId: Serenity.LookupEditor;
        Character: Serenity.StringEditor;
    }
    class MovieCastForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface MovieCastRow {
        MovieCastId?: number;
        MovieId?: number;
        PersonId?: number;
        Character?: string;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        PersonFirstName?: string;
        PersonLastName?: string;
        PersonBirthDate?: string;
        PersonBirthPlace?: string;
        PersonGender?: number;
        PersonHeight?: number;
        PersonFullName?: string;
    }
    namespace MovieCastRow {
        const idProperty = "MovieCastId";
        const nameProperty = "Character";
        const localTextPrefix = "Default.MovieCast";
        const lookupKey = "Default.MovieCast";
        function getLookup(): Q.Lookup<MovieCastRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieCastId = "MovieCastId",
            MovieId = "MovieId",
            PersonId = "PersonId",
            Character = "Character",
            MovieTitle = "MovieTitle",
            MovieDescription = "MovieDescription",
            MovieStoryline = "MovieStoryline",
            MovieYear = "MovieYear",
            MovieReleaseDate = "MovieReleaseDate",
            MovieRuntime = "MovieRuntime",
            MovieKind = "MovieKind",
            PersonFirstName = "PersonFirstName",
            PersonLastName = "PersonLastName",
            PersonBirthDate = "PersonBirthDate",
            PersonBirthPlace = "PersonBirthPlace",
            PersonGender = "PersonGender",
            PersonHeight = "PersonHeight",
            PersonFullName = "PersonFullName"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace MovieCastService {
        const baseUrl = "Default/MovieCast";
        function Create(request: Serenity.SaveRequest<MovieCastRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovieCastRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovieCastRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovieCastRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/MovieCast/Create",
            Update = "Default/MovieCast/Update",
            Delete = "Default/MovieCast/Delete",
            Retrieve = "Default/MovieCast/Retrieve",
            List = "Default/MovieCast/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface MovieForm {
        Title: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        CastList: MovieCastEditor;
        Storyline: Serenity.TextAreaEditor;
        Year: Serenity.IntegerEditor;
        ReleaseDate: Serenity.DateEditor;
        Runtime: Serenity.IntegerEditor;
        Kind: Serenity.EnumEditor;
        GenreList: Serenity.LookupEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
    }
    class MovieForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface MovieGenresRow {
        MovieGenreId?: number;
        MovieId?: number;
        GenreId?: number;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        GenreName?: string;
    }
    namespace MovieGenresRow {
        const idProperty = "MovieGenreId";
        const localTextPrefix = "Default.MovieGenres";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieGenreId = "MovieGenreId",
            MovieId = "MovieId",
            GenreId = "GenreId",
            MovieTitle = "MovieTitle",
            MovieDescription = "MovieDescription",
            MovieStoryline = "MovieStoryline",
            MovieYear = "MovieYear",
            MovieReleaseDate = "MovieReleaseDate",
            MovieRuntime = "MovieRuntime",
            MovieKind = "MovieKind",
            GenreName = "GenreName"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace MovieGenresService {
        const baseUrl = "Default/MovieGenres";
        function Create(request: Serenity.SaveRequest<MovieGenresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovieGenresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovieGenresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovieGenresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/MovieGenres/Create",
            Update = "Default/MovieGenres/Update",
            Delete = "Default/MovieGenres/Delete",
            Retrieve = "Default/MovieGenres/Retrieve",
            List = "Default/MovieGenres/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface MovieRow {
        MovieId?: number;
        Title?: string;
        Actors?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
        Kind?: number;
        GenreList?: number[];
        CastList?: MovieCastRow[];
        PrimaryImage?: string;
        GalleryImages?: string;
    }
    namespace MovieRow {
        const idProperty = "MovieId";
        const nameProperty = "Title";
        const localTextPrefix = "Default.Movie";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MovieId = "MovieId",
            Title = "Title",
            Actors = "Actors",
            Description = "Description",
            Storyline = "Storyline",
            Year = "Year",
            ReleaseDate = "ReleaseDate",
            Runtime = "Runtime",
            Kind = "Kind",
            GenreList = "GenreList",
            CastList = "CastList",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace MovieService {
        const baseUrl = "Default/Movie";
        function Create(request: Serenity.SaveRequest<MovieRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MovieRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MovieRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MovieRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Movie/Create",
            Update = "Default/Movie/Update",
            Delete = "Default/Movie/Delete",
            Retrieve = "Default/Movie/Retrieve",
            List = "Default/Movie/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface PartyMasterForm {
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Gst: Serenity.StringEditor;
        Pan: Serenity.StringEditor;
        StateId: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
    }
    class PartyMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PartyMasterRow {
        Id?: number;
        Name?: string;
        Email?: string;
        PhoneNumber?: string;
        Gst?: string;
        Pan?: string;
        StateId?: number;
        Address?: string;
        StateName?: string;
    }
    namespace PartyMasterRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.PartyMaster";
        const lookupKey = "Default.PartyMaster";
        function getLookup(): Q.Lookup<PartyMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Email = "Email",
            PhoneNumber = "PhoneNumber",
            Gst = "Gst",
            Pan = "Pan",
            StateId = "StateId",
            Address = "Address",
            StateName = "StateName"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace PartyMasterService {
        const baseUrl = "Default/PartyMaster";
        function Create(request: Serenity.SaveRequest<PartyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PartyMaster/Create",
            Update = "Default/PartyMaster/Update",
            Delete = "Default/PartyMaster/Delete",
            Retrieve = "Default/PartyMaster/Retrieve",
            List = "Default/PartyMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface PendingTripDetailsInvoiceForm {
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        PlantId: Serenity.IntegerEditor;
        PlantName: Serenity.StringEditor;
        DistrictId: Serenity.IntegerEditor;
        DistrictName: Serenity.StringEditor;
        DestinationId: Serenity.IntegerEditor;
        DestinationName: Serenity.StringEditor;
        VehicleId: Serenity.IntegerEditor;
        VehicleNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        BranchId: Serenity.IntegerEditor;
        BranchName: Serenity.StringEditor;
        StateId: Serenity.IntegerEditor;
        StateName: Serenity.StringEditor;
        ItemId: Serenity.IntegerEditor;
        ItemName: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        FreightRate: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        Createdate: Serenity.DateEditor;
        Createdby: Serenity.IntegerEditor;
        Updatedby: Serenity.IntegerEditor;
        Updateddate: Serenity.DateEditor;
    }
    class PendingTripDetailsInvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PendingTripDetailsInvoiceRow {
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        PlantId?: number;
        PlantName?: string;
        DistrictId?: number;
        DistrictName?: string;
        DestinationId?: number;
        DestinationName?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        CustomerId?: number;
        CustomerName?: string;
        BranchId?: number;
        BranchName?: string;
        StateId?: number;
        StateName?: string;
        ItemId?: number;
        ItemName?: string;
        Weight?: number;
        FreightRate?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        Remarks?: string;
        CreatedDate?: string;
        Createdate?: string;
        Createdby?: number;
        Updatedby?: number;
        Updateddate?: string;
    }
    namespace PendingTripDetailsInvoiceRow {
        const idProperty = "LoadingTripId";
        const nameProperty = "TripNo";
        const localTextPrefix = "Default.PendingTripDetailsInvoice";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            PlantId = "PlantId",
            PlantName = "PlantName",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            DestinationId = "DestinationId",
            DestinationName = "DestinationName",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            StateId = "StateId",
            StateName = "StateName",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Weight = "Weight",
            FreightRate = "FreightRate",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            Createdate = "Createdate",
            Createdby = "Createdby",
            Updatedby = "Updatedby",
            Updateddate = "Updateddate"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace PendingTripDetailsInvoiceService {
        const baseUrl = "Default/PendingTripDetailsInvoice";
        function Create(request: Serenity.SaveRequest<PendingTripDetailsInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PendingTripDetailsInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PendingTripDetailsInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PendingTripDetailsInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetSelectedTrips(request: TripRequest, onSuccess?: (response: TripResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PendingTripDetailsInvoice/Create",
            Update = "Default/PendingTripDetailsInvoice/Update",
            Delete = "Default/PendingTripDetailsInvoice/Delete",
            Retrieve = "Default/PendingTripDetailsInvoice/Retrieve",
            List = "Default/PendingTripDetailsInvoice/List",
            GetSelectedTrips = "Default/PendingTripDetailsInvoice/GetSelectedTrips"
        }
    }
}
declare namespace SereneMovieTutorial.Default.Person {
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface PersonForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        BirthPlace: Serenity.StringEditor;
        Gender: Serenity.EnumEditor;
        Height: Serenity.IntegerEditor;
        PrimaryImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
    }
    class PersonForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PersonRow {
        PersonId?: number;
        FirstName?: string;
        LastName?: string;
        BirthDate?: string;
        BirthPlace?: string;
        Gender?: Modules.Default.Person.Gender;
        Height?: number;
        FullName?: string;
        PrimaryImage?: string;
        GalleryImages?: string;
    }
    namespace PersonRow {
        const idProperty = "PersonId";
        const nameProperty = "FullName";
        const localTextPrefix = "Default.Person";
        const lookupKey = "Default.Person";
        function getLookup(): Q.Lookup<PersonRow>;
        const deletePermission = "Administration:General:Delete";
        const insertPermission = "Administration:General:Insert";
        const readPermission = "Administration:General:Read";
        const updatePermission = "Administration:General:Modify";
        const enum Fields {
            PersonId = "PersonId",
            FirstName = "FirstName",
            LastName = "LastName",
            BirthDate = "BirthDate",
            BirthPlace = "BirthPlace",
            Gender = "Gender",
            Height = "Height",
            FullName = "FullName",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace PersonService {
        const baseUrl = "Default/Person";
        function Create(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Person/Create",
            Update = "Default/Person/Update",
            Delete = "Default/Person/Delete",
            Retrieve = "Default/Person/Retrieve",
            List = "Default/Person/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface PlantForm {
        Plant: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class PlantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PlantRow {
        Id?: number;
        Plant?: string;
        Remarks?: string;
    }
    namespace PlantRow {
        const idProperty = "Id";
        const nameProperty = "Plant";
        const localTextPrefix = "Default.Plant";
        const lookupKey = "Default.Plant";
        function getLookup(): Q.Lookup<PlantRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Plant = "Plant",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace PlantService {
        const baseUrl = "Default/Plant";
        function Create(request: Serenity.SaveRequest<PlantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PlantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PlantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PlantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Plant/Create",
            Update = "Default/Plant/Update",
            Delete = "Default/Plant/Delete",
            Retrieve = "Default/Plant/Retrieve",
            List = "Default/Plant/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PumpStockRequest extends Serenity.ServiceRequest {
        PumpId?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PumpStockResponse extends Serenity.ServiceResponse {
        Stock?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface PumpmasterForm {
        Name: Serenity.StringEditor;
        Stock: Serenity.DecimalEditor;
        Gst: Serenity.StringEditor;
        Pan: Serenity.StringEditor;
        Type: Serenity.EnumEditor;
        Address: Serenity.TextAreaEditor;
    }
    class PumpmasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface PumpmasterRow {
        Id?: number;
        Name?: string;
        Stock?: number;
        Gst?: string;
        Pan?: string;
        Type?: Modules.Default.Pumpmaster.TypeState;
        Address?: string;
    }
    namespace PumpmasterRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Pumpmaster";
        const lookupKey = "master.Pump";
        function getLookup(): Q.Lookup<PumpmasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Stock = "Stock",
            Gst = "Gst",
            Pan = "Pan",
            Type = "Type",
            Address = "Address"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace PumpmasterService {
        const baseUrl = "Default/Pumpmaster";
        function Create(request: Serenity.SaveRequest<PumpmasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PumpmasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PumpmasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PumpmasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetPumpStock(request: PumpStockRequest, onSuccess?: (response: PumpStockResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Pumpmaster/Create",
            Update = "Default/Pumpmaster/Update",
            Delete = "Default/Pumpmaster/Delete",
            Retrieve = "Default/Pumpmaster/Retrieve",
            List = "Default/Pumpmaster/List",
            GetPumpStock = "Default/Pumpmaster/GetPumpStock"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface StateMasterForm {
        State: Serenity.StringEditor;
        StateCode: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class StateMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface StateMasterRow {
        Id?: number;
        State?: string;
        StateCode?: string;
        Remarks?: string;
    }
    namespace StateMasterRow {
        const idProperty = "Id";
        const nameProperty = "State";
        const localTextPrefix = "Default.StateMaster";
        const lookupKey = "Default.StateMaster";
        function getLookup(): Q.Lookup<StateMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            State = "State",
            StateCode = "StateCode",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace StateMasterService {
        const baseUrl = "Default/StateMaster";
        function Create(request: Serenity.SaveRequest<StateMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StateMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StateMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StateMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/StateMaster/Create",
            Update = "Default/StateMaster/Update",
            Delete = "Default/StateMaster/Delete",
            Retrieve = "Default/StateMaster/Retrieve",
            List = "Default/StateMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface TaxForm {
        TaxAmount: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }
    class TaxForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface TaxRow {
        Id?: number;
        TaxAmount?: number;
        TaxAmountText?: string;
        Remarks?: string;
    }
    namespace TaxRow {
        const idProperty = "Id";
        const nameProperty = "TaxAmountText";
        const localTextPrefix = "Default.Tax";
        const lookupKey = "Default.Tax";
        function getLookup(): Q.Lookup<TaxRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            TaxAmount = "TaxAmount",
            TaxAmountText = "TaxAmountText",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace TaxService {
        const baseUrl = "Default/Tax";
        function Create(request: Serenity.SaveRequest<TaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Tax/Create",
            Update = "Default/Tax/Update",
            Delete = "Default/Tax/Delete",
            Retrieve = "Default/Tax/Retrieve",
            List = "Default/Tax/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface TripRequest extends Serenity.ServiceRequest {
        Ids?: string[];
        Trip?: string[];
    }
}
declare namespace SereneMovieTutorial.Default {
    interface TripResponse extends Serenity.ServiceResponse {
        Trips?: PendingTripDetailsInvoiceRow[];
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface UnitForm {
        UnitName: Serenity.StringEditor;
    }
    class UnitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface UnitRow {
        Id?: number;
        UnitName?: string;
    }
    namespace UnitRow {
        const idProperty = "Id";
        const nameProperty = "UnitName";
        const localTextPrefix = "Default.Unit";
        const lookupKey = "Default.Unit";
        function getLookup(): Q.Lookup<UnitRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            UnitName = "UnitName"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace UnitService {
        const baseUrl = "Default/Unit";
        function Create(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Unit/Create",
            Update = "Default/Unit/Update",
            Delete = "Default/Unit/Delete",
            Retrieve = "Default/Unit/Retrieve",
            List = "Default/Unit/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface UnloadTripForm {
        LoadingTripId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        Plant: Serenity.StringEditor;
        District: Serenity.StringEditor;
        Destination: Serenity.StringEditor;
        VehicleName: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        Branch: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Item: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        UnloadWeight: Serenity.DecimalEditor;
        UnloadDate: Serenity.DateEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
    }
    class UnloadTripForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface UnloadTripRow {
        UnloadTripId?: number;
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        Plant?: string;
        District?: string;
        Destination?: string;
        VehicleName?: string;
        CustomerName?: string;
        Branch?: string;
        State?: string;
        Item?: string;
        Weight?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        UnloadWeight?: number;
        UnloadDate?: string;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace UnloadTripRow {
        const idProperty = "UnloadTripId";
        const nameProperty = "TripNo";
        const localTextPrefix = "Default.UnloadTrip";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            UnloadTripId = "UnloadTripId",
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            Plant = "Plant",
            District = "District",
            Destination = "Destination",
            VehicleName = "VehicleName",
            CustomerName = "CustomerName",
            Branch = "Branch",
            State = "State",
            Item = "Item",
            Weight = "Weight",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
            UnloadWeight = "UnloadWeight",
            UnloadDate = "UnloadDate",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            CreateDate = "CreateDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace UnloadTripService {
        const baseUrl = "Default/UnloadTrip";
        function Create(request: Serenity.SaveRequest<UnloadTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UnloadTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UnloadTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UnloadTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/UnloadTrip/Create",
            Update = "Default/UnloadTrip/Update",
            Delete = "Default/UnloadTrip/Delete",
            Retrieve = "Default/UnloadTrip/Retrieve",
            List = "Default/UnloadTrip/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface VLoadingTripDetailsForm {
        LoadingTripId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        PlantName: Serenity.StringEditor;
        DistrictName: Serenity.StringEditor;
        DestinationName: Serenity.StringEditor;
        VehicleNumber: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        BranchName: Serenity.StringEditor;
        StateName: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
    }
    class VLoadingTripDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VLoadingTripDetailsRow {
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        PlantId?: number;
        PlantName?: string;
        DistrictId?: number;
        DistrictName?: string;
        DestinationId?: number;
        DestinationName?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        CustomerId?: number;
        CustomerName?: string;
        BranchId?: number;
        BranchName?: string;
        StateId?: number;
        StateName?: string;
        ItemId?: number;
        ItemName?: string;
        Weight?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace VLoadingTripDetailsRow {
        const idProperty = "LoadingTripId";
        const nameProperty = "TripNo";
        const localTextPrefix = "Default.VLoadingTripDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            PlantId = "PlantId",
            PlantName = "PlantName",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            DestinationId = "DestinationId",
            DestinationName = "DestinationName",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            StateId = "StateId",
            StateName = "StateName",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Weight = "Weight",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            CreateDate = "CreateDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace VLoadingTripDetailsService {
        const baseUrl = "Default/VLoadingTripDetails";
        function Create(request: Serenity.SaveRequest<VLoadingTripDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VLoadingTripDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VLoadingTripDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VLoadingTripDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/VLoadingTripDetails/Create",
            Update = "Default/VLoadingTripDetails/Update",
            Delete = "Default/VLoadingTripDetails/Delete",
            Retrieve = "Default/VLoadingTripDetails/Retrieve",
            List = "Default/VLoadingTripDetails/List"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleDetailsResponse extends Serenity.ServiceResponse {
        Details?: VehicleMasterRow;
    }
}
declare namespace SereneMovieTutorial.Default {
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleMasterForm {
        VehicleNumber: Serenity.StringEditor;
        VehicleType: Serenity.EnumEditor;
        Brand: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        ManufacturingYear: Serenity.IntegerEditor;
        FuelType: Serenity.EnumEditor;
        EngineNumber: Serenity.StringEditor;
        ChassisNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        SeatingCapacity: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        InsuranceExpiryDate: Serenity.DateEditor;
        Wheels: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        CreatedDate: Serenity.DateEditor;
    }
    class VehicleMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleMasterRow {
        VehicleId?: number;
        VehicleNumber?: string;
        VehicleType?: Modules.Default.VehicleMaster.VehicleType;
        Brand?: string;
        Model?: string;
        ManufacturingYear?: number;
        FuelType?: Modules.Default.VehicleMaster.FuelType;
        EngineNumber?: string;
        ChassisNumber?: string;
        Color?: string;
        SeatingCapacity?: number;
        CustomerId?: number;
        CustomerName?: string;
        InsuranceExpiryDate?: string;
        IsActive?: boolean;
        Wheels?: number;
        CreatedDate?: string;
    }
    namespace VehicleMasterRow {
        const idProperty = "VehicleId";
        const nameProperty = "VehicleNumber";
        const localTextPrefix = "Default.VehicleMaster";
        const lookupKey = "Default.VehicleMaster";
        function getLookup(): Q.Lookup<VehicleMasterRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            VehicleType = "VehicleType",
            Brand = "Brand",
            Model = "Model",
            ManufacturingYear = "ManufacturingYear",
            FuelType = "FuelType",
            EngineNumber = "EngineNumber",
            ChassisNumber = "ChassisNumber",
            Color = "Color",
            SeatingCapacity = "SeatingCapacity",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            InsuranceExpiryDate = "InsuranceExpiryDate",
            IsActive = "IsActive",
            Wheels = "Wheels",
            CreatedDate = "CreatedDate"
        }
    }
}
declare namespace SereneMovieTutorial.Default {
    namespace VehicleMasterService {
        const baseUrl = "Default/VehicleMaster";
        function Create(request: Serenity.SaveRequest<VehicleMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VehicleMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VehicleMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VehicleMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/VehicleMaster/Create",
            Update = "Default/VehicleMaster/Update",
            Delete = "Default/VehicleMaster/Delete",
            Retrieve = "Default/VehicleMaster/Retrieve",
            List = "Default/VehicleMaster/List"
        }
    }
}
declare namespace SereneMovieTutorial {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SereneMovieTutorial {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface DieselissueForm {
        VehicleId: Serenity.LookupEditor;
        Tripno: Serenity.LookupEditor;
        Plant: Serenity.LookupEditor;
        Distict: Serenity.LookupEditor;
        Destination: Serenity.LookupEditor;
        Pumpid: Serenity.LookupEditor;
        Stock: Serenity.DecimalEditor;
        Today: Serenity.DateEditor;
        Rateofdiesel: Serenity.DecimalEditor;
        Diesel: Serenity.DecimalEditor;
        Totalprice: Serenity.DecimalEditor;
    }
    class DieselissueForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface DieselissueRow {
        Id?: number;
        Tripno?: number;
        TripNumber?: string;
        VehicleId?: number;
        Vehiclenumber?: string;
        Plant?: number;
        PlantName?: string;
        Distict?: number;
        DistrictName?: string;
        Destination?: number;
        DestinationName?: string;
        Pumpid?: number;
        Stock?: number;
        Diesel?: number;
        Today?: string;
        Rateofdiesel?: number;
        Totalprice?: number;
        PumpName?: string;
        CreatedBy?: number;
        CreatedDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace DieselissueRow {
        const idProperty = "Id";
        const nameProperty = "Vehiclenumber";
        const localTextPrefix = "FuelManagement.Dieselissue";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Tripno = "Tripno",
            TripNumber = "TripNumber",
            VehicleId = "VehicleId",
            Vehiclenumber = "Vehiclenumber",
            Plant = "Plant",
            PlantName = "PlantName",
            Distict = "Distict",
            DistrictName = "DistrictName",
            Destination = "Destination",
            DestinationName = "DestinationName",
            Pumpid = "Pumpid",
            Stock = "Stock",
            Diesel = "Diesel",
            Today = "Today",
            Rateofdiesel = "Rateofdiesel",
            Totalprice = "Totalprice",
            PumpName = "PumpName",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    namespace DieselissueService {
        const baseUrl = "FuelManagement/Dieselissue";
        function Create(request: Serenity.SaveRequest<DieselissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DieselissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DieselissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DieselissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDieselRate(request: Modules.FuelManagement.Dieselissue.DieselRateRequest, onSuccess?: (response: any) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetTripDetails(request: TripDetailsRequest, onSuccess?: (response: TripDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FuelManagement/Dieselissue/Create",
            Update = "FuelManagement/Dieselissue/Update",
            Delete = "FuelManagement/Dieselissue/Delete",
            Retrieve = "FuelManagement/Dieselissue/Retrieve",
            List = "FuelManagement/Dieselissue/List",
            GetDieselRate = "FuelManagement/Dieselissue/GetDieselRate",
            GetTripDetails = "FuelManagement/Dieselissue/GetTripDetails"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface FuelDataForm {
        InwardNo: Serenity.StringEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        TankerNo: Serenity.StringEditor;
        QtyKl: Serenity.DecimalEditor;
        RateKl: Serenity.DecimalEditor;
        BasicAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        QuantityLtr: Serenity.DecimalEditor;
        RateLtr: Serenity.DecimalEditor;
        TransportationRate: Serenity.DecimalEditor;
        TransportationAmt: Serenity.DecimalEditor;
        ShortageKl: Serenity.DecimalEditor;
        ShortageLtr: Serenity.DecimalEditor;
        ShortageAmt: Serenity.DecimalEditor;
        ReceiptDate: Serenity.DateEditor;
        TransporterId: Serenity.IntegerEditor;
        PartyId: Serenity.IntegerEditor;
        TdsPayable: Serenity.BooleanEditor;
        TdsAccountId: Serenity.IntegerEditor;
        TdsSection: Serenity.StringEditor;
        TdsPercent: Serenity.DecimalEditor;
        TdsAmount: Serenity.DecimalEditor;
        DrAccountId: Serenity.IntegerEditor;
        ShortageDrAccount: Serenity.IntegerEditor;
        ShortageCrAccount: Serenity.IntegerEditor;
        ShowFuelDetails: Serenity.EnumEditor;
        FuelDetails: FuelDetailsEditor;
        AllottedQuantity: Serenity.DecimalEditor;
    }
    class FuelDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface FuelDataRow {
        Id?: number;
        InwardNo?: string;
        InvoiceNo?: string;
        InvoiceDate?: string;
        TankerNo?: string;
        QtyKl?: number;
        RateKl?: number;
        QuantityLtr?: number;
        BasicAmount?: number;
        TotalAmount?: number;
        RateLtr?: number;
        TransportationRate?: number;
        TransportationAmt?: number;
        ShortageKl?: number;
        ShortageLtr?: number;
        ShortageAmt?: number;
        ReceiptDate?: string;
        TransporterId?: number;
        PartyId?: number;
        TdsPayable?: boolean;
        TdsAccountId?: number;
        TdsSection?: string;
        TdsPercent?: number;
        TdsAmount?: number;
        DrAccountId?: number;
        ShortageDrAccount?: number;
        ShortageCrAccount?: number;
        FuelDetails?: FuelDetailsRow[];
        AllottedQuantity?: number;
        ShowFuelDetails?: Modules.FuelManagement.FuelData.YesNo;
    }
    namespace FuelDataRow {
        const idProperty = "Id";
        const nameProperty = "InwardNo";
        const localTextPrefix = "FuelManagement.FuelData";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            InwardNo = "InwardNo",
            InvoiceNo = "InvoiceNo",
            InvoiceDate = "InvoiceDate",
            TankerNo = "TankerNo",
            QtyKl = "QtyKl",
            RateKl = "RateKl",
            QuantityLtr = "QuantityLtr",
            BasicAmount = "BasicAmount",
            TotalAmount = "TotalAmount",
            RateLtr = "RateLtr",
            TransportationRate = "TransportationRate",
            TransportationAmt = "TransportationAmt",
            ShortageKl = "ShortageKl",
            ShortageLtr = "ShortageLtr",
            ShortageAmt = "ShortageAmt",
            ReceiptDate = "ReceiptDate",
            TransporterId = "TransporterId",
            PartyId = "PartyId",
            TdsPayable = "TdsPayable",
            TdsAccountId = "TdsAccountId",
            TdsSection = "TdsSection",
            TdsPercent = "TdsPercent",
            TdsAmount = "TdsAmount",
            DrAccountId = "DrAccountId",
            ShortageDrAccount = "ShortageDrAccount",
            ShortageCrAccount = "ShortageCrAccount",
            FuelDetails = "FuelDetails",
            AllottedQuantity = "AllottedQuantity",
            ShowFuelDetails = "ShowFuelDetails"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    namespace FuelDataService {
        const baseUrl = "FuelManagement/FuelData";
        function Create(request: Serenity.SaveRequest<FuelDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FuelDataRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FuelDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FuelDataRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FuelManagement/FuelData/Create",
            Update = "FuelManagement/FuelData/Update",
            Delete = "FuelManagement/FuelData/Delete",
            Retrieve = "FuelManagement/FuelData/Retrieve",
            List = "FuelManagement/FuelData/List"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface FuelDetailsForm {
        PumpId: Serenity.LookupEditor;
        TankerNo: Serenity.StringEditor;
        ReceiptDate: Serenity.DateEditor;
        Quantity: Serenity.DecimalEditor;
    }
    class FuelDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface FuelDetailsRow {
        Id?: number;
        PumpId?: number;
        PumpName?: string;
        ReceiptDate?: string;
        Quantity?: number;
        FuelDataId?: number;
        TankerNo?: string;
    }
    namespace FuelDetailsRow {
        const idProperty = "Id";
        const localTextPrefix = "FuelManagement.FuelDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PumpId = "PumpId",
            PumpName = "PumpName",
            ReceiptDate = "ReceiptDate",
            Quantity = "Quantity",
            FuelDataId = "FuelDataId",
            TankerNo = "TankerNo"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    namespace FuelDetailsService {
        const baseUrl = "FuelManagement/FuelDetails";
        function Create(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FuelDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FuelDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "FuelManagement/FuelDetails/Create",
            Update = "FuelManagement/FuelDetails/Update",
            Delete = "FuelManagement/FuelDetails/Delete",
            Retrieve = "FuelManagement/FuelDetails/Retrieve",
            List = "FuelManagement/FuelDetails/List"
        }
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface TripDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
        Tripid?: number;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    interface TripDetailsResponse extends Serenity.ServiceResponse {
        Details?: Default.LoadingTripRow;
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SereneMovieTutorial {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface ExItemForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ExItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
    interface ItemDetailsRequest extends Serenity.ServiceRequest {
        Id?: number;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface ItemForm {
        Partnumber: Serenity.StringEditor;
        Partname: Serenity.StringEditor;
        Openingstock: Serenity.IntegerEditor;
        Rate: Serenity.DecimalEditor;
        Stocklvlminimum: Serenity.DecimalEditor;
        Stocklvlmaximum: Serenity.DecimalEditor;
        Purchasestock: Serenity.DecimalEditor;
        GrossPrice: Serenity.DecimalEditor;
        Balancestock: Serenity.DecimalEditor;
    }
    class ItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface ItemRow {
        Id?: number;
        Partnumber?: string;
        Partname?: string;
        Openingstock?: number;
        Rate?: number;
        Stocklvlminimum?: number;
        Stocklvlmaximum?: number;
        Purchasestock?: number;
        GrossPrice?: number;
        Balancestock?: number;
        Createdby?: number;
        Createdat?: string;
        Updatedby?: number;
        Updatedat?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace ItemRow {
        const idProperty = "Id";
        const nameProperty = "Partname";
        const localTextPrefix = "Inventry.Item";
        const lookupKey = "Inventry.Item";
        function getLookup(): Q.Lookup<ItemRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Partnumber = "Partnumber",
            Partname = "Partname",
            Openingstock = "Openingstock",
            Rate = "Rate",
            Stocklvlminimum = "Stocklvlminimum",
            Stocklvlmaximum = "Stocklvlmaximum",
            Purchasestock = "Purchasestock",
            GrossPrice = "GrossPrice",
            Balancestock = "Balancestock",
            Createdby = "Createdby",
            Createdat = "Createdat",
            Updatedby = "Updatedby",
            Updatedat = "Updatedat",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace ItemService {
        const baseUrl = "Inventry/Item";
        function Create(request: Serenity.SaveRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/Item/Create",
            Update = "Inventry/Item/Update",
            Delete = "Inventry/Item/Delete",
            Retrieve = "Inventry/Item/Retrieve",
            List = "Inventry/Item/List",
            ExcelImport = "Inventry/Item/ExcelImport"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface ItempDetailsResponse extends Serenity.ServiceResponse {
        Details?: ItemRow;
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
    interface PendingPurchaseOrderForm {
        PoNo: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        PartyId: Serenity.IntegerEditor;
        BranchId: Serenity.IntegerEditor;
        DetailId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        PartNo: Serenity.StringEditor;
        PreviousRate: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class PendingPurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PendingPurchaseOrderRow {
        Id?: number;
        PoNo?: string;
        OrderDate?: string;
        PartyId?: number;
        BranchId?: number;
        DetailId?: number;
        ItemId?: number;
        PartNo?: string;
        PreviousRate?: number;
        CurrentRate?: number;
        Quantity?: number;
        UnitId?: number;
        TotalAmount?: number;
        Party?: string;
        BranchName?: string;
        Partname?: string;
        UnitName?: string;
        BalanceStock?: number;
        BasicAmount?: number;
        CGSTRate?: number;
        IGSTRate?: number;
        SGSTRate?: number;
        StockLevelMax?: number;
        StockLevelMin?: number;
        PurchaseOrderId?: number;
        CgstAmount?: number;
        SgstAmount?: number;
        IgstAmount?: number;
    }
    namespace PendingPurchaseOrderRow {
        const idProperty = "DetailId";
        const nameProperty = "PoNo";
        const localTextPrefix = "Inventry.PendingPurchaseOrder";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PoNo = "PoNo",
            OrderDate = "OrderDate",
            PartyId = "PartyId",
            BranchId = "BranchId",
            DetailId = "DetailId",
            ItemId = "ItemId",
            PartNo = "PartNo",
            PreviousRate = "PreviousRate",
            CurrentRate = "CurrentRate",
            Quantity = "Quantity",
            UnitId = "UnitId",
            TotalAmount = "TotalAmount",
            Party = "Party",
            BranchName = "BranchName",
            Partname = "Partname",
            UnitName = "UnitName",
            BalanceStock = "BalanceStock",
            BasicAmount = "BasicAmount",
            CGSTRate = "CGSTRate",
            IGSTRate = "IGSTRate",
            SGSTRate = "SGSTRate",
            StockLevelMax = "StockLevelMax",
            StockLevelMin = "StockLevelMin",
            PurchaseOrderId = "PurchaseOrderId",
            CgstAmount = "CgstAmount",
            SgstAmount = "SgstAmount",
            IgstAmount = "IgstAmount"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace PendingPurchaseOrderService {
        const baseUrl = "Inventry/PendingPurchaseOrder";
        function Create(request: Serenity.SaveRequest<PendingPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PendingPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PendingPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PendingPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetSelectedTrips(request: TripRequest, onSuccess?: (response: TripResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/PendingPurchaseOrder/Create",
            Update = "Inventry/PendingPurchaseOrder/Update",
            Delete = "Inventry/PendingPurchaseOrder/Delete",
            Retrieve = "Inventry/PendingPurchaseOrder/Retrieve",
            List = "Inventry/PendingPurchaseOrder/List",
            GetSelectedTrips = "Inventry/PendingPurchaseOrder/GetSelectedTrips"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseBillDetailForm {
        PurchaseBillId: Serenity.IntegerEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        ItemName: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        PreviousRate: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        CgstRate: Serenity.DecimalEditor;
        SgstRate: Serenity.DecimalEditor;
        IgstRate: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }
    class PurchaseBillDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseBillDetailRow {
        Id?: number;
        PurchaseOrderId?: number;
        PurchaseBillId?: number;
        ItemId?: number;
        ItemName?: string;
        Quantity?: number;
        CurrentRate?: number;
        PreviousRate?: number;
        Discount?: number;
        TaxableAmount?: number;
        CgstRate?: number;
        SgstRate?: number;
        IgstRate?: number;
        CgstAmount?: number;
        SgstAmount?: number;
        IgstAmount?: number;
        TotalAmount?: number;
        Remarks?: string;
    }
    namespace PurchaseBillDetailRow {
        const idProperty = "Id";
        const nameProperty = "ItemName";
        const localTextPrefix = "Inventry.PurchaseBillDetail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PurchaseOrderId = "PurchaseOrderId",
            PurchaseBillId = "PurchaseBillId",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Quantity = "Quantity",
            CurrentRate = "CurrentRate",
            PreviousRate = "PreviousRate",
            Discount = "Discount",
            TaxableAmount = "TaxableAmount",
            CgstRate = "CgstRate",
            SgstRate = "SgstRate",
            IgstRate = "IgstRate",
            CgstAmount = "CgstAmount",
            SgstAmount = "SgstAmount",
            IgstAmount = "IgstAmount",
            TotalAmount = "TotalAmount",
            Remarks = "Remarks"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace PurchaseBillDetailService {
        const baseUrl = "Inventry/PurchaseBillDetail";
        function Create(request: Serenity.SaveRequest<PurchaseBillDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseBillDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseBillDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseBillDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/PurchaseBillDetail/Create",
            Update = "Inventry/PurchaseBillDetail/Update",
            Delete = "Inventry/PurchaseBillDetail/Delete",
            Retrieve = "Inventry/PurchaseBillDetail/Retrieve",
            List = "Inventry/PurchaseBillDetail/List"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseBillForm {
        PartyId: Serenity.LookupEditor;
        DebitLedgerId: Serenity.IntegerEditor;
        BillNo: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        Gstin: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        RoundOff: Serenity.DecimalEditor;
        TotalBillAmount: Serenity.DecimalEditor;
        StockInDate: Serenity.DateEditor;
        PurchaseDetails: ExPurchaseBillDetailEditor;
        TaxableAmount: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TdsSection: Serenity.StringEditor;
        TdsRate: Serenity.DecimalEditor;
        TdsAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        LedgerTypeId: Serenity.IntegerEditor;
        TDSLedger: Serenity.IntegerEditor;
        CgstLedger: Serenity.IntegerEditor;
        SgstLedger: Serenity.IntegerEditor;
        IgstLedger: Serenity.IntegerEditor;
    }
    class PurchaseBillForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseBillRow {
        Id?: number;
        PartyId?: number;
        PartyName?: string;
        DebitLedgerId?: number;
        BillNo?: string;
        LedgerTypeId?: number;
        Gstin?: string;
        BillDate?: string;
        PoNumber?: string;
        RoundOff?: number;
        StockInDate?: string;
        TotalBillAmount?: number;
        TDSLedger?: number;
        TdsRate?: number;
        TdsSection?: string;
        TdsAmount?: number;
        TaxableAmount?: number;
        CgstAmount?: number;
        SgstAmount?: number;
        IgstAmount?: number;
        CgstLedger?: number;
        SgstLedger?: number;
        IgstLedger?: number;
        Remarks?: string;
        PurchaseDetails?: PurchaseBillDetailRow[];
    }
    namespace PurchaseBillRow {
        const idProperty = "Id";
        const nameProperty = "BillNo";
        const localTextPrefix = "Inventry.PurchaseBill";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PartyId = "PartyId",
            PartyName = "PartyName",
            DebitLedgerId = "DebitLedgerId",
            BillNo = "BillNo",
            LedgerTypeId = "LedgerTypeId",
            Gstin = "Gstin",
            BillDate = "BillDate",
            PoNumber = "PoNumber",
            RoundOff = "RoundOff",
            StockInDate = "StockInDate",
            TotalBillAmount = "TotalBillAmount",
            TDSLedger = "TDSLedger",
            TdsRate = "TdsRate",
            TdsSection = "TdsSection",
            TdsAmount = "TdsAmount",
            TaxableAmount = "TaxableAmount",
            CgstAmount = "CgstAmount",
            SgstAmount = "SgstAmount",
            IgstAmount = "IgstAmount",
            CgstLedger = "CgstLedger",
            SgstLedger = "SgstLedger",
            IgstLedger = "IgstLedger",
            Remarks = "Remarks",
            PurchaseDetails = "PurchaseDetails"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace PurchaseBillService {
        const baseUrl = "Inventry/PurchaseBill";
        function Create(request: Serenity.SaveRequest<PurchaseBillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseBillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseBillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseBillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/PurchaseBill/Create",
            Update = "Inventry/PurchaseBill/Update",
            Delete = "Inventry/PurchaseBill/Delete",
            Retrieve = "Inventry/PurchaseBill/Retrieve",
            List = "Inventry/PurchaseBill/List"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseOrderForm {
        PoNo: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        PartyId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        Remarks: Serenity.StringEditor;
        DetailList: PurchaseRequestDetailEditor;
    }
    class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseOrderRow {
        Id?: number;
        PoNo?: string;
        OrderDate?: string;
        PartyId?: number;
        PartyName?: string;
        BranchId?: number;
        BranchName?: string;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        UpdateDate?: string;
        UpdatedBy?: number;
        DetailList?: PurchaseRequestDetailRow[];
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }
    namespace PurchaseOrderRow {
        const idProperty = "Id";
        const nameProperty = "PoNo";
        const localTextPrefix = "Inventry.PurchaseOrder";
        const lookupKey = "Inventry.PurchaseOrder";
        function getLookup(): Q.Lookup<PurchaseOrderRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PoNo = "PoNo",
            OrderDate = "OrderDate",
            PartyId = "PartyId",
            PartyName = "PartyName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdateDate = "UpdateDate",
            UpdatedBy = "UpdatedBy",
            DetailList = "DetailList",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace PurchaseOrderService {
        const baseUrl = "Inventry/PurchaseOrder";
        function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/PurchaseOrder/Create",
            Update = "Inventry/PurchaseOrder/Update",
            Delete = "Inventry/PurchaseOrder/Delete",
            Retrieve = "Inventry/PurchaseOrder/Retrieve",
            List = "Inventry/PurchaseOrder/List"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseRequestDetailForm {
        PoNo: Serenity.StringEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ItemId: Serenity.LookupEditor;
        PartNo: Serenity.StringEditor;
        PreviousRate: Serenity.DecimalEditor;
        BalanceStock: Serenity.DecimalEditor;
        StockLevelMax: Serenity.DecimalEditor;
        StockLevelMin: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        BasicAmount: Serenity.DecimalEditor;
        CgstRate: Serenity.DecimalEditor;
        SgstRate: Serenity.DecimalEditor;
        IgstRate: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class PurchaseRequestDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface PurchaseRequestDetailRow {
        Id?: number;
        PurchaseOrderId?: number;
        ItemId?: number;
        PartName?: string;
        PartNo?: string;
        PreviousRate?: number;
        CurrentRate?: number;
        Quantity?: number;
        UnitId?: number;
        UnitName?: string;
        BalanceStock?: number;
        StockLevelMin?: number;
        StockLevelMax?: number;
        BasicAmount?: number;
        CgstRate?: number;
        SgstRate?: number;
        IgstRate?: number;
        CgstAmount?: number;
        SgstAmount?: number;
        IgstAmount?: number;
        TotalAmount?: number;
        PoNo?: string;
    }
    namespace PurchaseRequestDetailRow {
        const idProperty = "Id";
        const nameProperty = "PartNo";
        const localTextPrefix = "Inventry.PurchaseRequestDetail";
        const lookupKey = "Inventry.PurchaseRequestDetail";
        function getLookup(): Q.Lookup<PurchaseRequestDetailRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PurchaseOrderId = "PurchaseOrderId",
            ItemId = "ItemId",
            PartName = "PartName",
            PartNo = "PartNo",
            PreviousRate = "PreviousRate",
            CurrentRate = "CurrentRate",
            Quantity = "Quantity",
            UnitId = "UnitId",
            UnitName = "UnitName",
            BalanceStock = "BalanceStock",
            StockLevelMin = "StockLevelMin",
            StockLevelMax = "StockLevelMax",
            BasicAmount = "BasicAmount",
            CgstRate = "CgstRate",
            SgstRate = "SgstRate",
            IgstRate = "IgstRate",
            CgstAmount = "CgstAmount",
            SgstAmount = "SgstAmount",
            IgstAmount = "IgstAmount",
            TotalAmount = "TotalAmount",
            PoNo = "PoNo"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    namespace PurchaseRequestDetailService {
        const baseUrl = "Inventry/PurchaseRequestDetail";
        function Create(request: Serenity.SaveRequest<PurchaseRequestDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseRequestDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequestDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequestDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetItemDetails(request: ItemDetailsRequest, onSuccess?: (response: ItempDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inventry/PurchaseRequestDetail/Create",
            Update = "Inventry/PurchaseRequestDetail/Update",
            Delete = "Inventry/PurchaseRequestDetail/Delete",
            Retrieve = "Inventry/PurchaseRequestDetail/Retrieve",
            List = "Inventry/PurchaseRequestDetail/List",
            GetItemDetails = "Inventry/PurchaseRequestDetail/GetItemDetails"
        }
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface TripRequest extends Serenity.ServiceRequest {
        Ids?: string[];
        purchase?: string[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    interface TripResponse extends Serenity.ServiceResponse {
        Trips?: PendingPurchaseOrderRow[];
        ErrorMsg?: string;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface GetLatestMaintenanceRequest extends Serenity.ServiceRequest {
        TruckId?: number;
        HeadId?: number;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface GetLatestMaintenanceResponse extends Serenity.ServiceResponse {
        LastMaintenance?: string;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface GetVehicleDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface GetVehicleDetailsResponse extends Serenity.ServiceResponse {
        Vehicle?: Default.VehicleMasterRow;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface MaintenanceForm {
        EntryNumber: Serenity.IntegerEditor;
        EntryDate: Serenity.DateEditor;
        HeadId: Serenity.LookupEditor;
        TruckId: Serenity.LookupEditor;
        TruckType: Serenity.EnumEditor;
        Owner: Serenity.LookupEditor;
        ModelNumber: Serenity.StringEditor;
        LastMaintenance: Serenity.DateEditor;
        PeriodTill: Serenity.StringEditor;
        EstimatedPeriod: Serenity.IntegerEditor;
        DueDate: Serenity.DateEditor;
        Narration: Serenity.StringEditor;
    }
    class MaintenanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    interface MaintenanceRow {
        Id?: number;
        EntryNumber?: number;
        EntryDate?: string;
        TruckId?: number;
        TruckType?: Modules.Default.VehicleMaster.VehicleType;
        ModelNumber?: string;
        LastMaintenance?: string;
        PeriodTill?: string;
        EstimatedPeriod?: number;
        DueDate?: string;
        Narration?: string;
        Owner?: number;
        HeadId?: number;
        CustomerName?: string;
        Head?: string;
        TruckNumber?: string;
    }
    namespace MaintenanceRow {
        const idProperty = "Id";
        const nameProperty = "TruckNumber";
        const localTextPrefix = "MaintenanceModule.Maintenance";
        const lookupKey = "MaintenanceModule.Maintenance";
        function getLookup(): Q.Lookup<MaintenanceRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            EntryNumber = "EntryNumber",
            EntryDate = "EntryDate",
            TruckId = "TruckId",
            TruckType = "TruckType",
            ModelNumber = "ModelNumber",
            LastMaintenance = "LastMaintenance",
            PeriodTill = "PeriodTill",
            EstimatedPeriod = "EstimatedPeriod",
            DueDate = "DueDate",
            Narration = "Narration",
            Owner = "Owner",
            HeadId = "HeadId",
            CustomerName = "CustomerName",
            Head = "Head",
            TruckNumber = "TruckNumber"
        }
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    namespace MaintenanceService {
        const baseUrl = "MaintenanceModule/Maintenance";
        function Create(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaintenanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaintenanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDetails(request: GetVehicleDetailsRequest, onSuccess?: (response: GetVehicleDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetLatestMaintenance(request: GetLatestMaintenanceRequest, onSuccess?: (response: GetLatestMaintenanceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "MaintenanceModule/Maintenance/Create",
            Update = "MaintenanceModule/Maintenance/Update",
            Delete = "MaintenanceModule/Maintenance/Delete",
            Retrieve = "MaintenanceModule/Maintenance/Retrieve",
            List = "MaintenanceModule/Maintenance/List",
            GetDetails = "MaintenanceModule/Maintenance/GetDetails",
            GetLatestMaintenance = "MaintenanceModule/Maintenance/GetLatestMaintenance"
        }
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
        BranchId: Serenity.LookupEditor;
        FinancialYearId: Serenity.LookupEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        BranchId?: number;
        FinancialYearId?: number;
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneMovieTutorial.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SereneMovieTutorial.Modules.Default.CustomerMaster {
    enum IdentityType {
        PAN = 1,
        Aadhar = 2,
        DrivingLicence = 3
    }
}
declare namespace SereneMovieTutorial.Modules.Default.Movie {
    enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
}
declare namespace SereneMovieTutorial.Modules.Default.Person {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace SereneMovieTutorial.Modules.Default.Pumpmaster {
    enum TypeState {
        Company = 1,
        Party = 2
    }
}
declare namespace SereneMovieTutorial.Modules.Default.VehicleMaster {
    enum FuelType {
        Petrol = 1,
        Diesel = 2,
        CNG = 3,
        LPG = 4
    }
}
declare namespace SereneMovieTutorial.Modules.Default.VehicleMaster {
    enum VehicleType {
        Truck = 1,
        Bus = 2,
        Van = 3,
        Car = 4
    }
}
declare namespace SereneMovieTutorial.Modules.FuelManagement.Dieselissue {
    interface DieselRateRequest extends Serenity.ServiceRequest {
        Date?: string;
    }
}
declare namespace SereneMovieTutorial.Modules.FuelManagement.FuelData {
    enum YesNo {
        No = 0,
        Yes = 1
    }
}
declare namespace SereneMovieTutorial {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
        BranchId?: number;
        BranchName?: string;
    }
}
declare namespace SereneMovieTutorial.Texts {
}
declare namespace SereneMovieTutorial.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SereneMovieTutorial.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SereneMovieTutorial.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SereneMovieTutorial.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SereneMovieTutorial.Administration {
    class CustomPermissionEditor extends Serenity.DataGrid<PermissionItem, PermissionEditorOptions> {
        protected getIdProperty(): string;
        private _rolePermissions;
        private hasActionMap;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionEditorOptions);
        setItems(items: PermissionItem[]): void;
        protected onViewFilter(item: PermissionItem): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        set rolePermissions(value: string[]);
        private getDescendants;
        private getEffectiveClass;
    }
    interface PermissionItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        HasActions?: boolean;
        Insert?: boolean;
        Read?: boolean;
        Modify?: boolean;
        Delete?: boolean;
        Grant?: boolean;
    }
    interface PermissionEditorOptions {
        showRevoke?: boolean;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class NewUserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private userId;
        private username;
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
        protected onDialogOpen(): void;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class PermissionEditor extends Serenity.DataGrid<PermissionItem, PermissionEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SereneMovieTutorial.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SereneMovieTutorial.LanguageList {
    function getValue(): string[][];
}
declare namespace SereneMovieTutorial.ScriptInitialization {
}
declare namespace SereneMovieTutorial {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SereneMovieTutorial.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SereneMovieTutorial.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SereneMovieTutorial.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SereneMovieTutorial.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SereneMovieTutorial.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SereneMovieTutorial.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SereneMovieTutorial {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SereneMovieTutorial.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SereneMovieTutorial.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
interface JQueryStatic {
    cookie(key: string, value?: any, options?: any): any;
}
declare namespace SereneMovieTutorial.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace jsPDF {
    interface AutoTableOptions {
        [key: string]: any;
    }
    interface AutoTableStyles {
        [key: string]: any;
    }
    interface AutoTableColumn {
        dataKey?: string;
        title?: string;
    }
}
declare namespace SereneMovieTutorial.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SereneMovieTutorial.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SereneMovieTutorial.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SereneMovieTutorial.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SereneMovieTutorial.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class BranchMasterDialog extends Serenity.EntityDialog<BranchMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BranchMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class BranchMasterGrid extends Serenity.EntityGrid<BranchMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BranchMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class CustomerMasterDialog extends Serenity.EntityDialog<CustomerMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected form: CustomerMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class CustomerMasterGrid extends Serenity.EntityGrid<CustomerMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class DestinationDialog extends Serenity.EntityDialog<DestinationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DestinationForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class DestinationGrid extends Serenity.EntityGrid<DestinationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DestinationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class DistictDialog extends Serenity.EntityDialog<DistictRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DistictForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class DistictGrid extends Serenity.EntityGrid<DistictRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DistictDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        private pendingChanges;
        constructor(container: JQuery);
        private selectFormatter;
        private getEffectiveValue;
        private inputsChange;
        protected getButtons(): Serenity.ToolButton[];
        private saveChanges1;
        private stringInputFormatter;
    }
}
declare namespace SereneMovieTutorial.Default {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeesForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class ExpenseDialog extends Serenity.EntityDialog<ExpenseRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpenseForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Default {
    class ExpenseGrid extends Serenity.EntityGrid<ExpenseRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpenseDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SereneMovieTutorial.Default {
    class FinancialYearDialog extends Serenity.EntityDialog<FinancialYearRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FinancialYearForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class FinancialYearGrid extends Serenity.EntityGrid<FinancialYearRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FinancialYearDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class GenreDialog extends Serenity.EntityDialog<GenreRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GenreForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class GenreGrid extends Serenity.EntityGrid<GenreRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GenreDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class MultipleDateEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        get_value(): string;
        set_value(value: string): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class ExInvoiceDetailsDialog extends Common.GridEditorDialog<InvoicedetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        parentDialog: ManageinvoiceDialog;
        protected form: InvoicedetailsForm;
        protected getSaveEntity(): InvoicedetailsRow;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class ExInvoiceDetailsEditor extends Common.GridEditorBase<InvoicedetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExInvoiceDetailsDialog;
        protected getLocalTextPrefix(): string;
        protected getIdProperty(): string;
        parentDialog: ManageinvoiceDialog;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class InvoicedetailsDialog extends Serenity.EntityDialog<InvoicedetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoicedetailsForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class InvoicedetailsGrid extends Serenity.EntityGrid<InvoicedetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoicedetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class ItemMasterDialog extends Serenity.EntityDialog<ItemMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class ItemMasterGrid extends Serenity.EntityGrid<ItemMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class LoadingTripDialog extends Serenity.EntityDialog<LoadingTripRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LoadingTripForm;
        protected afterLoadEntity(): void;
        private clearExpenseFields;
        private getVehicleOwners;
        getExpense(): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class LoadingTripGrid extends Serenity.EntityGrid<LoadingTripRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LoadingTripDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        protected onViewProcessData(response: Serenity.ListResponse<LoadingTripRow>): Serenity.ListResponse<LoadingTripRow>;
        protected getSlickOptions(): Slick.GridOptions;
        private branchId;
        private BranchName;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
    }
    interface VehicleDetailsResponse extends Serenity.ServiceResponse {
        Details?: VehicleMasterRow;
    }
    interface ExpenseLookupRequest extends Serenity.ServiceRequest {
        PlantId?: number;
        DistrictId?: number;
        DestinationId?: number;
        Weight: number;
    }
    interface ExpenseLookupResponse extends Serenity.ServiceResponse {
        ExpenseAmount?: number;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MaintenanceHeadDialog extends Serenity.EntityDialog<MaintenanceHeadRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaintenanceHeadForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MaintenanceHeadGrid extends Serenity.EntityGrid<MaintenanceHeadRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceHeadDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class ManageinvoiceDialog extends Serenity.EntityDialog<ManageinvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ManageinvoiceForm;
        rows: SereneMovieTutorial.Default.InvoicedetailsRow[];
        id: number;
        Plant_Id: number;
        Branch_id: number;
        totTrips: number;
        invoice: number;
        sac: number;
        totalFreightAmount: number;
        TotalWeight: number;
        stateid: number;
        LoadingTripId: number;
        constructor(rows?: InvoicedetailsRow[]);
        protected loadEntity(entity: ManageinvoiceRow): void;
        private getBranchStateId;
        afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class ManageinvoiceGrid extends Serenity.EntityGrid<ManageinvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManageinvoiceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class GenreListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MovieDialog extends Serenity.EntityDialog<MovieRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MovieForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MovieDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        protected getButtons(): Serenity.ToolButton[];
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MovieCastEditDialog extends Common.GridEditorDialog<MovieCastRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: MovieCastForm;
        constructor();
    }
}
declare namespace SereneMovieTutorial.Default {
    class MovieCastEditor extends Common.GridEditorBase<MovieCastRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof MovieCastEditDialog;
        constructor(container: JQuery);
        protected validateEntity(row: MovieCastRow, id: number): boolean;
        protected getAddButtonCaption(): string;
    }
}
declare namespace SereneMovieTutorial.Default {
    class MovieCastEditorDialog extends Common.GridEditorDialog<MovieCastRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: MovieCastForm;
        constructor();
        protected getAddButtonCaption(): string;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PartyMasterDialog extends Serenity.EntityDialog<PartyMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PartyMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PartyMasterGrid extends Serenity.EntityGrid<PartyMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartyMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SereneMovieTutorial.Default {
    class PendingTripDetailsInvoiceDialog extends Serenity.EntityDialog<PendingTripDetailsInvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PendingTripDetailsInvoiceForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PendingTripDetailsInvoiceGrid extends Serenity.EntityGrid<PendingTripDetailsInvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PendingTripDetailsInvoiceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        plant: number;
        branch: number;
        totalTrip: number;
        Invoice: number;
        SAC: number;
        TotAmount: number;
        TotWeight: number;
        stateId: any;
        LoadingTripId: any;
        manageinvoiceId: any;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Default {
    class PersonDialog extends Serenity.EntityDialog<PersonRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PersonForm;
        private moviesGrid;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PersonGrid extends Serenity.EntityGrid<PersonRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class PersonMovieGrid extends Serenity.EntityGrid<MovieCastRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any;
        protected getInitialTitle(): any;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _personID;
        get personID(): number;
        set personID(value: number);
    }
}
declare namespace SereneMovieTutorial.Default {
    class PlantDialog extends Serenity.EntityDialog<PlantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PlantForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PlantGrid extends Serenity.EntityGrid<PlantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PlantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class PumpmasterDialog extends Serenity.EntityDialog<PumpmasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PumpmasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class PumpmasterGrid extends Serenity.EntityGrid<PumpmasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PumpmasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SereneMovieTutorial.Default {
    class StateMasterDialog extends Serenity.EntityDialog<StateMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StateMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class StateMasterGrid extends Serenity.EntityGrid<StateMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StateMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class TaxDialog extends Serenity.EntityDialog<TaxRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TaxForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class TaxGrid extends Serenity.EntityGrid<TaxRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TaxDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class UnitDialog extends Serenity.EntityDialog<UnitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnitForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class UnitGrid extends Serenity.EntityGrid<UnitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnitDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    class DownloadFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SereneMovieTutorial.Default {
    class UnloadTripDialog extends Serenity.EntityDialog<UnloadTripRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UnloadTripForm;
        loadingTripDataRow: VLoadingTripDetailsRow;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        loadTripData(d: VLoadingTripDetailsRow): void;
        private setReadonlyFields;
    }
}
declare namespace SereneMovieTutorial.Default {
    class UnloadTripGrid extends Serenity.EntityGrid<UnloadTripRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UnloadTripDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Default {
    class VLoadingTripDetailsDialog extends Serenity.EntityDialog<VLoadingTripDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VLoadingTripDetailsForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class VLoadingTripDetailsGrid extends Serenity.EntityGrid<VLoadingTripDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VLoadingTripDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected editItem(entityOrId: any): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SereneMovieTutorial.Default {
    class VehicleMasterDialog extends Serenity.EntityDialog<VehicleMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected form: VehicleMasterForm;
    }
}
declare namespace SereneMovieTutorial.Default {
    class VehicleMasterGrid extends Serenity.EntityGrid<VehicleMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VehicleMasterDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getColumns(): Slick.Column[];
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class DieselissueDialog extends Serenity.EntityDialog<DieselissueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DieselissueForm;
        constructor();
        private calculateTotal;
        private clearTripFields;
        private fillTripDetails;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class DieselissueGrid extends Serenity.EntityGrid<DieselissueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DieselissueDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDataDialog extends Serenity.EntityDialog<FuelDataRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FuelDataForm;
        private updateAllottedQty;
        constructor();
        private calculateQuantityLtr;
        private calculateRateLtr;
        private calculateRateKl;
        private calculateTransportationAmount;
        protected validateBeforeSave(): boolean;
        getTankerNo(): string;
        protected afterLoadEntity(): void;
        private hasFuelDetailsData;
        private handleFuelDetailsVisibility;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDataGrid extends Serenity.EntityGrid<FuelDataRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuelDataDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDetailsDialog extends Serenity.EntityDialog<FuelDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FuelDetailsForm;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDetailsEditor extends Common.GridEditorBase<FuelDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuelDetailsEditorDialog;
        protected getLocalTextPrefix(): string;
        protected getIdProperty(): string;
        TankerName: string;
        parentDialog: FuelDataDialog;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
        protected initEntityDialog(itemType: any, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDetailsEditorDialog extends Common.GridEditorDialog<FuelDetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        parentDialog: FuelDataDialog;
        protected form: FuelDetailsForm;
        protected getSaveEntity(): FuelDetailsRow;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.FuelManagement {
    class FuelDetailsGrid extends Serenity.EntityGrid<FuelDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FuelDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class ExItemDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class ItemDialog extends Serenity.EntityDialog<ItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ItemForm;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class ItemGrid extends Serenity.EntityGrid<ItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ItemDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PendingPurchaseOrderDialog extends Serenity.EntityDialog<PendingPurchaseOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PendingPurchaseOrderForm;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PendingPurchaseOrderGrid extends Serenity.EntityGrid<PendingPurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseBillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected addButtonClick(): void;
        protected createToolbarExtensions(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseBillDialog extends Serenity.EntityDialog<PurchaseBillRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseBillForm;
        SelectedPartyId: number;
        SelectedPoNo: string;
        rows: SereneMovieTutorial.Inventry.PurchaseBillDetailRow[];
        CgstAmmount: number;
        SgstAmmount: number;
        IgstAmmount: number;
        constructor(rows?: SereneMovieTutorial.Inventry.PurchaseBillDetailRow[]);
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseBillGrid extends Serenity.EntityGrid<PurchaseBillRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseBillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class ExPurchaseBillDetailDialog extends Common.GridEditorDialog<PurchaseBillDetailRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        parentDialog: PurchaseBillDialog;
        protected form: PurchaseBillDetailForm;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class ExPurchaseBillDetailEditor extends Common.GridEditorBase<PurchaseBillDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExPurchaseBillDetailDialog;
        protected getLocalTextPrefix(): string;
        protected getIdProperty(): string;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseBillDetailDialog extends Serenity.EntityDialog<PurchaseBillDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseBillDetailForm;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseBillDetailGrid extends Serenity.EntityGrid<PurchaseBillDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseBillDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        private rows?;
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchaseOrderForm;
        constructor(rows?: SereneMovieTutorial.Inventry.PurchaseRequestDetailRow[]);
        getPONo(): string;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseRequestDetailDialog extends Serenity.EntityDialog<PurchaseRequestDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchaseRequestDetailForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        constructor();
        private toggleTaxFields;
        private calculateTotal;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseRequestDetailEditor extends Common.GridEditorBase<PurchaseRequestDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseRequestDetailEditorDialog;
        protected getLocalTextPrefix(): string;
        protected getIdProperty(): string;
        getPONo: string;
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseRequestDetailEditorDialog extends Common.GridEditorDialog<PurchaseRequestDetailRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PurchaseRequestDetailForm;
        protected getSaveEntity(): PurchaseRequestDetailRow;
        protected getToolbarButtons(): Serenity.ToolButton[];
        constructor();
        protected afterLoadEntity(): void;
        private toggleTaxFields;
        private calculateGST;
    }
}
declare namespace SereneMovieTutorial.Inventry {
    class PurchaseRequestDetailGrid extends Serenity.EntityGrid<PurchaseRequestDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseRequestDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    class MaintenanceDialog extends Serenity.EntityDialog<MaintenanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MaintenanceForm;
        constructor();
        private loadLastMaintenance;
        private updatePeriodTill;
        private updateDueDate;
    }
}
declare namespace SereneMovieTutorial.MaintenanceModule {
    class MaintenanceGrid extends Serenity.EntityGrid<MaintenanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaintenanceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
    }
}
declare namespace SereneMovieTutorial.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneMovieTutorial.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
