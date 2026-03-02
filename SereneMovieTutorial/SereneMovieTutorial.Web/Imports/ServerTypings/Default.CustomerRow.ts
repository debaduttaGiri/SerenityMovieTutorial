namespace SereneMovieTutorial.Default {
    export interface CustomerRow {
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

    export namespace CustomerRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'CustomerId';
        export const localTextPrefix = 'Default.Customer';
        export const deletePermission = 'Default:Customer:Delete';
        export const insertPermission = 'Default:Customer:Insert';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Default:Customer:Modify';

        export declare const enum Fields {
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

