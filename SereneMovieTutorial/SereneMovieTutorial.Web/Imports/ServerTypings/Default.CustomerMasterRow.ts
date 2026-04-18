namespace SereneMovieTutorial.Default {
    export interface CustomerMasterRow {
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

    export namespace CustomerMasterRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerCode';
        export const localTextPrefix = 'Default.CustomerMaster';
        export const lookupKey = 'Default.CustomerMaster';

        export function getLookup(): Q.Lookup<CustomerMasterRow> {
            return Q.getLookup<CustomerMasterRow>('Default.CustomerMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

