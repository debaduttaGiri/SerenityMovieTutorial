namespace SereneMovieTutorial.Default {
    export interface VehicleMasterRow {
        VehicleId?: number;
        VehicleNumber?: string;
        VehicleType?: Modules.Default.VehicleMaster.VehicleType;
        Brand?: string;
        Model?: string;
        ManufacturingYear?: number;
        FuelType?: Modules.Default.VehicleMaster.FuelType;
        EngineNumber?: string;
        ChassisNumber?: string;
        Color?: string;
        SeatingCapacity?: number;
        CustomerId?: number;
        CustomerName?: string;
        InsuranceExpiryDate?: string;
        IsActive?: boolean;
        Wheels?: number;
        CreatedDate?: string;
    }

    export namespace VehicleMasterRow {
        export const idProperty = 'VehicleId';
        export const nameProperty = 'VehicleNumber';
        export const localTextPrefix = 'Default.VehicleMaster';
        export const lookupKey = 'Default.VehicleMaster';

        export function getLookup(): Q.Lookup<VehicleMasterRow> {
            return Q.getLookup<VehicleMasterRow>('Default.VehicleMaster');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            VehicleType = "VehicleType",
            Brand = "Brand",
            Model = "Model",
            ManufacturingYear = "ManufacturingYear",
            FuelType = "FuelType",
            EngineNumber = "EngineNumber",
            ChassisNumber = "ChassisNumber",
            Color = "Color",
            SeatingCapacity = "SeatingCapacity",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            InsuranceExpiryDate = "InsuranceExpiryDate",
            IsActive = "IsActive",
            Wheels = "Wheels",
            CreatedDate = "CreatedDate"
        }
    }
}

