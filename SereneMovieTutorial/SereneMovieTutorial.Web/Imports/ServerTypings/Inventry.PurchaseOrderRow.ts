namespace SereneMovieTutorial.Inventry {
    export interface PurchaseOrderRow {
        Id?: number;
        PoNo?: string;
        OrderDate?: string;
        PartyId?: number;
        PartyName?: string;
        BranchId?: number;
        BranchName?: string;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        UpdateDate?: string;
        UpdatedBy?: number;
        DetailList?: PurchaseRequestDetailRow[];
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PoNo';
        export const localTextPrefix = 'Inventry.PurchaseOrder';
        export const lookupKey = 'Inventry.PurchaseOrder';

        export function getLookup(): Q.Lookup<PurchaseOrderRow> {
            return Q.getLookup<PurchaseOrderRow>('Inventry.PurchaseOrder');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PoNo = "PoNo",
            OrderDate = "OrderDate",
            PartyId = "PartyId",
            PartyName = "PartyName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdateDate = "UpdateDate",
            UpdatedBy = "UpdatedBy",
            DetailList = "DetailList",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}

