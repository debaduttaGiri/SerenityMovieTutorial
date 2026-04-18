namespace SereneMovieTutorial.Default {
    export interface InvoicedetailsRow {
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

    export namespace InvoicedetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Lrno';
        export const localTextPrefix = 'Default.Invoicedetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

