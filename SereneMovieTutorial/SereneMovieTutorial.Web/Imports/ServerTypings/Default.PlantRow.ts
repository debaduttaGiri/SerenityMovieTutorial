namespace SereneMovieTutorial.Default {
    export interface PlantRow {
        Id?: number;
        Plant?: string;
        Remarks?: string;
    }

    export namespace PlantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Plant';
        export const localTextPrefix = 'Default.Plant';
        export const lookupKey = 'Default.Plant';

        export function getLookup(): Q.Lookup<PlantRow> {
            return Q.getLookup<PlantRow>('Default.Plant');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Plant = "Plant",
            Remarks = "Remarks"
        }
    }
}

