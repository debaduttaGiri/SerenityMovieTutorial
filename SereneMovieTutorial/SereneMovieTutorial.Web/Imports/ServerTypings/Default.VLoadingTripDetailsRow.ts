namespace SereneMovieTutorial.Default {
    export interface VLoadingTripDetailsRow {
        LoadingTripId?: number;
        TripNo?: string;
        TripDate?: string;
        PlantId?: number;
        PlantName?: string;
        DistrictId?: number;
        DistrictName?: string;
        DestinationId?: number;
        DestinationName?: string;
        VehicleId?: number;
        VehicleNumber?: string;
        CustomerId?: number;
        CustomerName?: string;
        BranchId?: number;
        BranchName?: string;
        StateId?: number;
        StateName?: string;
        ItemId?: number;
        ItemName?: string;
        Weight?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        Remarks?: string;
        CreatedDate?: string;
        CreatedBy?: number;
        CreateDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace VLoadingTripDetailsRow {
        export const idProperty = 'LoadingTripId';
        export const nameProperty = 'TripNo';
        export const localTextPrefix = 'Default.VLoadingTripDetails';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LoadingTripId = "LoadingTripId",
            TripNo = "TripNo",
            TripDate = "TripDate",
            PlantId = "PlantId",
            PlantName = "PlantName",
            DistrictId = "DistrictId",
            DistrictName = "DistrictName",
            DestinationId = "DestinationId",
            DestinationName = "DestinationName",
            VehicleId = "VehicleId",
            VehicleNumber = "VehicleNumber",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            StateId = "StateId",
            StateName = "StateName",
            ItemId = "ItemId",
            ItemName = "ItemName",
            Weight = "Weight",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
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

