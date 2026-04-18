namespace SereneMovieTutorial.Default {
    export interface BranchMasterRow {
        Id?: number;
        BranchName?: string;
        BranchCode?: string;
        GstNo?: string;
        PanNo?: string;
        PhoneNumber?: string;
        PinCode?: number;
        Address?: string;
        State?: string;
        Remarks?: string;
        StateId?: number;
        State1?: string;
        StateStateCode?: string;
        StateRemarks?: string;
    }

    export namespace BranchMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BranchName';
        export const localTextPrefix = 'Default.BranchMaster';
        export const lookupKey = 'Default.BranchMaster';

        export function getLookup(): Q.Lookup<BranchMasterRow> {
            return Q.getLookup<BranchMasterRow>('Default.BranchMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            BranchName = "BranchName",
            BranchCode = "BranchCode",
            GstNo = "GstNo",
            PanNo = "PanNo",
            PhoneNumber = "PhoneNumber",
            PinCode = "PinCode",
            Address = "Address",
            State = "State",
            Remarks = "Remarks",
            StateId = "StateId",
            State1 = "State1",
            StateStateCode = "StateStateCode",
            StateRemarks = "StateRemarks"
        }
    }
}

