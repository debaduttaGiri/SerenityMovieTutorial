namespace SereneMovieTutorial.Inventry {
    export interface PurchaseBillDetailRow {
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

    export namespace PurchaseBillDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Inventry.PurchaseBillDetail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

