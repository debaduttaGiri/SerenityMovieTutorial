namespace SereneMovieTutorial.Inventry {
    export interface PurchaseRequestDetailRow {
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

    export namespace PurchaseRequestDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PartNo';
        export const localTextPrefix = 'Inventry.PurchaseRequestDetail';
        export const lookupKey = 'Inventry.PurchaseRequestDetail';

        export function getLookup(): Q.Lookup<PurchaseRequestDetailRow> {
            return Q.getLookup<PurchaseRequestDetailRow>('Inventry.PurchaseRequestDetail');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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

