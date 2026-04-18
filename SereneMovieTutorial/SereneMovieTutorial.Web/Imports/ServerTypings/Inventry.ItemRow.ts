namespace SereneMovieTutorial.Inventry {
    export interface ItemRow {
        Id?: number;
        Partnumber?: string;
        Partname?: string;
        Openingstock?: number;
        Rate?: number;
        Stocklvlminimum?: number;
        Stocklvlmaximum?: number;
        Purchasestock?: number;
        GrossPrice?: number;
        Balancestock?: number;
        Createdby?: number;
        Createdat?: string;
        Updatedby?: number;
        Updatedat?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace ItemRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Partname';
        export const localTextPrefix = 'Inventry.Item';
        export const lookupKey = 'Inventry.Item';

        export function getLookup(): Q.Lookup<ItemRow> {
            return Q.getLookup<ItemRow>('Inventry.Item');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Partnumber = "Partnumber",
            Partname = "Partname",
            Openingstock = "Openingstock",
            Rate = "Rate",
            Stocklvlminimum = "Stocklvlminimum",
            Stocklvlmaximum = "Stocklvlmaximum",
            Purchasestock = "Purchasestock",
            GrossPrice = "GrossPrice",
            Balancestock = "Balancestock",
            Createdby = "Createdby",
            Createdat = "Createdat",
            Updatedby = "Updatedby",
            Updatedat = "Updatedat",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}

