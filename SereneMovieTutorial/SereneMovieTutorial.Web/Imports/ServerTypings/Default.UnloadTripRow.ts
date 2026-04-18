namespace SereneMovieTutorial.Default {
    export interface UnloadTripRow {
        UnloadTripId?: number;
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        Plant?: string;
        District?: string;
        Destination?: string;
        VehicleName?: string;
        CustomerName?: string;
        Branch?: string;
        State?: string;
        Item?: string;
        Weight?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        UnloadWeight?: number;
        UnloadDate?: string;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace UnloadTripRow {
        export const idProperty = 'UnloadTripId';
        export const nameProperty = 'TripNo';
        export const localTextPrefix = 'Default.UnloadTrip';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UnloadTripId = "UnloadTripId",
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            Plant = "Plant",
            District = "District",
            Destination = "Destination",
            VehicleName = "VehicleName",
            CustomerName = "CustomerName",
            Branch = "Branch",
            State = "State",
            Item = "Item",
            Weight = "Weight",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
            UnloadWeight = "UnloadWeight",
            UnloadDate = "UnloadDate",
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

