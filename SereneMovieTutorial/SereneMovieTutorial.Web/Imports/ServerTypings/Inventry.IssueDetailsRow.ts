namespace SereneMovieTutorial.Inventry {
    export interface IssueDetailsRow {
        ItemId?: number;
        DetailId?: number;
        IssueId?: number;
        Partnumber?: string;
        Partname?: string;
        Company?: string;
        Rate?: number;
        Qty?: number;
        PartAmount?: number;
        StockAsOnDate?: number;
        TotalStock?: number;
        IssueIssueNo?: string;
        IssueVehicleNo?: string;
        IssueOwner?: string;
        IssueIssueDate?: string;
    }

    export namespace IssueDetailsRow {
        export const idProperty = 'DetailId';
        export const nameProperty = 'Partname';
        export const localTextPrefix = 'Inventry.IssueDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ItemId = "ItemId",
            DetailId = "DetailId",
            IssueId = "IssueId",
            Partnumber = "Partnumber",
            Partname = "Partname",
            Company = "Company",
            Rate = "Rate",
            Qty = "Qty",
            PartAmount = "PartAmount",
            StockAsOnDate = "StockAsOnDate",
            TotalStock = "TotalStock",
            IssueIssueNo = "IssueIssueNo",
            IssueVehicleNo = "IssueVehicleNo",
            IssueOwner = "IssueOwner",
            IssueIssueDate = "IssueIssueDate"
        }
    }
}

