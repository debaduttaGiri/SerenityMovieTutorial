namespace SereneMovieTutorial.MaintenanceModule {
    export interface MaintenanceRow {
        Id?: number;
        EntryNumber?: number;
        EntryDate?: string;
        TruckId?: number;
        TruckType?: Modules.Default.VehicleMaster.VehicleType;
        ModelNumber?: string;
        LastMaintenance?: string;
        PeriodTill?: string;
        EstimatedPeriod?: number;
        DueDate?: string;
        Narration?: string;
        Owner?: number;
        HeadId?: number;
        CustomerName?: string;
        Head?: string;
        TruckNumber?: string;
    }

    export namespace MaintenanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TruckNumber';
        export const localTextPrefix = 'MaintenanceModule.Maintenance';
        export const lookupKey = 'MaintenanceModule.Maintenance';

        export function getLookup(): Q.Lookup<MaintenanceRow> {
            return Q.getLookup<MaintenanceRow>('MaintenanceModule.Maintenance');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            EntryNumber = "EntryNumber",
            EntryDate = "EntryDate",
            TruckId = "TruckId",
            TruckType = "TruckType",
            ModelNumber = "ModelNumber",
            LastMaintenance = "LastMaintenance",
            PeriodTill = "PeriodTill",
            EstimatedPeriod = "EstimatedPeriod",
            DueDate = "DueDate",
            Narration = "Narration",
            Owner = "Owner",
            HeadId = "HeadId",
            CustomerName = "CustomerName",
            Head = "Head",
            TruckNumber = "TruckNumber"
        }
    }
}

