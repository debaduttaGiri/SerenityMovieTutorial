namespace SereneMovieTutorial.Inventry {
    export interface VPoApproveRow {
        Id?: number;
        PoNo?: string;
        OrderDate?: string;
        PartyId?: number;
        BranchId?: number;
        CreatedBy?: number;
        CreatedDate?: string;
        UpdatedBy?: number;
        UpdateDate?: string;
        Status?: boolean;
    }

    export namespace VPoApproveRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PoNo';
        export const localTextPrefix = 'Inventry.VPoApprove';
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
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdateDate = "UpdateDate",
            Status = "Status"
        }
    }
}

