namespace SereneMovieTutorial.Inventry {
    export interface IssueHeaderRow {
        IssueId?: number;
        IssueNo?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        Owner?: string;
        IssueDate?: string;
        IssueDetails?: IssueDetailsRow[];
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        UpdateDate?: string;
        UpdatedBy?: number;
    }

    export namespace IssueHeaderRow {
        export const idProperty = 'IssueId';
        export const nameProperty = 'IssueNo';
        export const localTextPrefix = 'Inventry.IssueHeader';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IssueId = "IssueId",
            IssueNo = "IssueNo",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            Owner = "Owner",
            IssueDate = "IssueDate",
            IssueDetails = "IssueDetails",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            UpdateDate = "UpdateDate",
            UpdatedBy = "UpdatedBy"
        }
    }
}

