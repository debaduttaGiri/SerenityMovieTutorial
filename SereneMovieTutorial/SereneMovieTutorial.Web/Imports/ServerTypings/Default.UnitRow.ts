namespace SereneMovieTutorial.Default {
    export interface UnitRow {
        Id?: number;
        UnitName?: string;
    }

    export namespace UnitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'UnitName';
        export const localTextPrefix = 'Default.Unit';
        export const lookupKey = 'Default.Unit';

        export function getLookup(): Q.Lookup<UnitRow> {
            return Q.getLookup<UnitRow>('Default.Unit');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            UnitName = "UnitName"
        }
    }
}

