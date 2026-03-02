namespace SereneMovieTutorial.Default {
    export interface DestinationRow {
        Id?: number;
        Plant?: number;
        Distict?: number;
        Destination?: string;
        Remarks?: string;
        Plant1?: string;
        PlantRemarks?: string;
        DistictPlant?: number;
        Distict1?: string;
        DistictRemarks?: string;
    }

    export namespace DestinationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Destination';
        export const localTextPrefix = 'Default.Destination';
        export const lookupKey = 'Default.Destination';

        export function getLookup(): Q.Lookup<DestinationRow> {
            return Q.getLookup<DestinationRow>('Default.Destination');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Plant = "Plant",
            Distict = "Distict",
            Destination = "Destination",
            Remarks = "Remarks",
            Plant1 = "Plant1",
            PlantRemarks = "PlantRemarks",
            DistictPlant = "DistictPlant",
            Distict1 = "Distict1",
            DistictRemarks = "DistictRemarks"
        }
    }
}

