namespace SereneMovieTutorial.Default {
    export interface StateMasterRow {
        Id?: number;
        State?: string;
        StateCode?: string;
        Remarks?: string;
    }

    export namespace StateMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'State';
        export const localTextPrefix = 'Default.StateMaster';
        export const lookupKey = 'Default.StateMaster';

        export function getLookup(): Q.Lookup<StateMasterRow> {
            return Q.getLookup<StateMasterRow>('Default.StateMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            State = "State",
            StateCode = "StateCode",
            Remarks = "Remarks"
        }
    }
}

