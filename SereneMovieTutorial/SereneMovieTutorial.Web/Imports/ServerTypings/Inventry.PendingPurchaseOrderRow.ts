namespace SereneMovieTutorial.Inventry {
    export interface PendingPurchaseOrderRow {
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

    export namespace PendingPurchaseOrderRow {
        export const idProperty = 'DetailId';
        export const nameProperty = 'PoNo';
        export const localTextPrefix = 'Inventry.PendingPurchaseOrder';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

