namespace SereneMovieTutorial.Default {
    export interface FinancialYearRow {
        Id?: number;
        Name?: string;
        StartDate?: string;
        EndDate?: string;
        NameOfInvoice?: string;
        Remarks?: string;
    }

    export namespace FinancialYearRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.FinancialYear';
        export const lookupKey = 'Default.FinancialYear';

        export function getLookup(): Q.Lookup<FinancialYearRow> {
            return Q.getLookup<FinancialYearRow>('Default.FinancialYear');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            StartDate = "StartDate",
            EndDate = "EndDate",
            NameOfInvoice = "NameOfInvoice",
            Remarks = "Remarks"
        }
    }
}

