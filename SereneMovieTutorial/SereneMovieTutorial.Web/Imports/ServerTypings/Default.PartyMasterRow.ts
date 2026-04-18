namespace SereneMovieTutorial.Default {
    export interface PartyMasterRow {
        Id?: number;
        Name?: string;
        Email?: string;
        PhoneNumber?: string;
        Gst?: string;
        Pan?: string;
        StateId?: number;
        Address?: string;
        StateName?: string;
    }

    export namespace PartyMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.PartyMaster';
        export const lookupKey = 'Default.PartyMaster';

        export function getLookup(): Q.Lookup<PartyMasterRow> {
            return Q.getLookup<PartyMasterRow>('Default.PartyMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Email = "Email",
            PhoneNumber = "PhoneNumber",
            Gst = "Gst",
            Pan = "Pan",
            StateId = "StateId",
            Address = "Address",
            StateName = "StateName"
        }
    }
}

