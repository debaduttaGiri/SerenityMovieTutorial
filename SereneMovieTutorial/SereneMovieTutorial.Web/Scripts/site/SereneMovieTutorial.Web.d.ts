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
        GstNo: Serenity.IntegerEditor;
        PanNo: Serenity.IntegerEditor;
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
        GstNo?: number;
        PanNo?: number;
        PhoneNumber?: number;
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
    interface GenreForm {
        Name: Serenity.StringEditor;
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
    }
    namespace GenreRow {
        const idProperty = "GenreId";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Genre";
        const lookupKey = "Default.Genre";
        function getLookup(): Q.Lookup<GenreRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
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
}
declare namespace SereneMovieTutorial.Default {
    interface LoadingTripForm {
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        StateId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        PlantId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        DestinationId: Serenity.LookupEditor;
        Wheels: Serenity.IntegerEditor;
        Weight: Serenity.DecimalEditor;
        CreatedDate: Serenity.DateEditor;
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
        Wheels?: number;
        Remarks?: string;
        CreatedDate?: string;
    }
    namespace LoadingTripRow {
        const idProperty = "LoadingTripId";
        const nameProperty = "TripNo";
        const localTextPrefix = "Default.LoadingTrip";
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
            Wheels = "Wheels",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate"
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
        function GetExpenseByRoute(request: ExpenseLookupRequest, onSuccess?: (response: ExpenseLookupResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/LoadingTrip/Create",
            Update = "Default/LoadingTrip/Update",
            Delete = "Default/LoadingTrip/Delete",
            Retrieve = "Default/LoadingTrip/Retrieve",
            List = "Default/LoadingTrip/List",
            GetVehicleDetails = "Default/LoadingTrip/GetVehicleDetails",
            GetExpenseByRoute = "Default/LoadingTrip/GetExpenseByRoute"
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
        Kind?: Modules.Default.Movie.MovieKind;
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
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
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
declare namespace SereneMovieTutorial {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
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
declare namespace SereneMovieTutorial.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
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
        constructor(container: JQuery);
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
        private loadExpense;
        private clearExpenseFields;
        private getVehicleOwners;
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
        protected getSlickOptions(): Slick.GridOptions;
        constructor(container: JQuery);
    }
}
declare namespace SereneMovieTutorial.Default {
    interface VehicleDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
    }
    interface VehicleDetailsResponse extends Serenity.ServiceResponse {
        Details?: VehicleDetailsDto;
    }
    interface VehicleDetailsDto {
        CustomerId?: number;
        Wheels?: number;
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
