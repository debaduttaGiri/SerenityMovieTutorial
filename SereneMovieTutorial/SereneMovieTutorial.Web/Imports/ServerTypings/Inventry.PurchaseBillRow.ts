namespace SereneMovieTutorial.Inventry {
    export interface PurchaseBillRow {
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

    export namespace PurchaseBillRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BillNo';
        export const localTextPrefix = 'Inventry.PurchaseBill';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

