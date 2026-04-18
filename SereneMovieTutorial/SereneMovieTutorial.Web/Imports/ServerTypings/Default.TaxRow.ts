namespace SereneMovieTutorial.Default {
    export interface TaxRow {
        Id?: number;
        TaxAmount?: number;
        TaxAmountText?: string;
        Remarks?: string;
    }

    export namespace TaxRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TaxAmountText';
        export const localTextPrefix = 'Default.Tax';
        export const lookupKey = 'Default.Tax';

        export function getLookup(): Q.Lookup<TaxRow> {
            return Q.getLookup<TaxRow>('Default.Tax');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            TaxAmount = "TaxAmount",
            TaxAmountText = "TaxAmountText",
            Remarks = "Remarks"
        }
    }
}

