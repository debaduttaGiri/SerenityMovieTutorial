namespace SereneMovieTutorial.Default {
    export interface MaintenanceHeadRow {
        Id?: number;
        Head?: string;
        Remarks?: string;
        CreatedBy?: number;
        UpdatedBy?: number;
        CreatedDate?: string;
        UpdatedDate?: string;
    }

    export namespace MaintenanceHeadRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Head';
        export const localTextPrefix = 'Default.MaintenanceHead';
        export const lookupKey = 'Default.MaintenanceHead';

        export function getLookup(): Q.Lookup<MaintenanceHeadRow> {
            return Q.getLookup<MaintenanceHeadRow>('Default.MaintenanceHead');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Head = "Head",
            Remarks = "Remarks",
            CreatedBy = "CreatedBy",
            UpdatedBy = "UpdatedBy",
            CreatedDate = "CreatedDate",
            UpdatedDate = "UpdatedDate"
        }
    }
}

