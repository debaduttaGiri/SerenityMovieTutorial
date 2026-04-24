namespace SereneMovieTutorial.Default {
    export interface DistictRow {
        Id?: number;
        Plant?: number;
        PlantName?: string;
        Distict?: string;
        Remarks?: string;
    }

    export namespace DistictRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Distict';
        export const localTextPrefix = 'Default.Distict';
        export const lookupKey = 'Default.Distict';

        export function getLookup(): Q.Lookup<DistictRow> {
            return Q.getLookup<DistictRow>('Default.Distict');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Plant = "Plant",
            PlantName = "PlantName",
            Distict = "Distict",
            Remarks = "Remarks"
        }
    }
}

