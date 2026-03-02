namespace SereneMovieTutorial.Default {
    export interface ItemMasterRow {
        Id?: number;
        ItemName?: string;
        Remarks?: string;
    }

    export namespace ItemMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Default.ItemMaster';
        export const lookupKey = 'Default.ItemMaster';

        export function getLookup(): Q.Lookup<ItemMasterRow> {
            return Q.getLookup<ItemMasterRow>('Default.ItemMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            ItemName = "ItemName",
            Remarks = "Remarks"
        }
    }
}

