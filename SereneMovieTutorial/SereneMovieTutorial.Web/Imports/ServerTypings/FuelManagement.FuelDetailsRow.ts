namespace SereneMovieTutorial.FuelManagement {
    export interface FuelDetailsRow {
        Id?: number;
        PumpId?: number;
        PumpName?: string;
        ReceiptDate?: string;
        Quantity?: number;
        FuelDataId?: number;
        TankerNo?: string;
    }

    export namespace FuelDetailsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'FuelManagement.FuelDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            PumpId = "PumpId",
            PumpName = "PumpName",
            ReceiptDate = "ReceiptDate",
            Quantity = "Quantity",
            FuelDataId = "FuelDataId",
            TankerNo = "TankerNo"
        }
    }
}

