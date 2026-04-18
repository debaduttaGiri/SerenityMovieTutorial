namespace SereneMovieTutorial.Default {
    export interface LoadingTripRow {
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        PlantId?: number;
        Plant?: string;
        DistrictId?: number;
        District?: string;
        DestinationId?: number;
        Destination?: string;
        ExpenseAmount?: number;
        VehicleId?: number;
        VehicleNumber?: string;
        CustomerId?: number;
        Customer?: string;
        BranchId?: number;
        Branch?: string;
        StateId?: number;
        State?: string;
        ItemId?: number;
        ItemName?: string;
        Weight?: number;
        freightRate?: number;
        Wheels?: number;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace LoadingTripRow {
        export const idProperty = 'LoadingTripId';
        export const nameProperty = 'TripNo';
        export const localTextPrefix = 'Default.LoadingTrip';
        export const lookupKey = 'Default.LoadingTrip';

        export function getLookup(): Q.Lookup<LoadingTripRow> {
            return Q.getLookup<LoadingTripRow>('Default.LoadingTrip');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            PlantId = "PlantId",
            Plant = "Plant",
            DistrictId = "DistrictId",
            District = "District",
            DestinationId = "DestinationId",
            Destination = "Destination",
            ExpenseAmount = "ExpenseAmount",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            CustomerId = "CustomerId",
            Customer = "Customer",
            BranchId = "BranchId",
            Branch = "Branch",
            StateId = "StateId",
            State = "State",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Weight = "Weight",
            freightRate = "freightRate",
            Wheels = "Wheels",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            CreateDate = "CreateDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}

