namespace SereneMovieTutorial.FuelManagement {
    export interface FuelDataRow {
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

    export namespace FuelDataRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InwardNo';
        export const localTextPrefix = 'FuelManagement.FuelData';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

