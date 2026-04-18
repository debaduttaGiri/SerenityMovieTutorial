namespace SereneMovieTutorial.Default {
    export interface PumpmasterRow {
        Id?: number;
        Name?: string;
        Stock?: number;
        Gst?: string;
        Pan?: string;
        Type?: Modules.Default.Pumpmaster.TypeState;
        Address?: string;
    }

    export namespace PumpmasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Pumpmaster';
        export const lookupKey = 'master.Pump';

        export function getLookup(): Q.Lookup<PumpmasterRow> {
            return Q.getLookup<PumpmasterRow>('master.Pump');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Stock = "Stock",
            Gst = "Gst",
            Pan = "Pan",
            Type = "Type",
            Address = "Address"
        }
    }
}

