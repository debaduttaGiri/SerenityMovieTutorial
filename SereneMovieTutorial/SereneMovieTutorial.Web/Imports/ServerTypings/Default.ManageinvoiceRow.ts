namespace SereneMovieTutorial.Default {
    export interface ManageinvoiceRow {
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

    export namespace ManageinvoiceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Invoiceno';
        export const localTextPrefix = 'Default.Manageinvoice';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

