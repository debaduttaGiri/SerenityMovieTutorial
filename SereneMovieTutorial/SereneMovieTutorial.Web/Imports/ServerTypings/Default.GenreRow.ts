namespace SereneMovieTutorial.Default {
    export interface GenreRow {
        GenreId?: number;
        Name?: string;
    }

    export namespace GenreRow {
        export const idProperty = 'GenreId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Genre';
        export const lookupKey = 'Default.Genre';

        export function getLookup(): Q.Lookup<GenreRow> {
            return Q.getLookup<GenreRow>('Default.Genre');
        }
        export const deletePermission = 'Administration:General:Delete';
        export const insertPermission = 'Administration:General:Insert';
        export const readPermission = 'Administration:General:Read';
        export const updatePermission = 'Administration:General:Modify';

        export declare const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
        }
    }
}

