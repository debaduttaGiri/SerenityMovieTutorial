namespace SereneMovieTutorial.Default {
    export interface PendingTripDetailsInvoiceRow {
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
        FreightRate?: number;
        Wheels?: number;
        ExpenseAmount?: number;
        Remarks?: string;
        CreatedDate?: string;
        Createdate?: string;
        Createdby?: number;
        Updatedby?: number;
        Updateddate?: string;
    }

    export namespace PendingTripDetailsInvoiceRow {
        export const idProperty = 'LoadingTripId';
        export const nameProperty = 'TripNo';
        export const localTextPrefix = 'Default.PendingTripDetailsInvoice';
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
            FreightRate = "FreightRate",
            Wheels = "Wheels",
            ExpenseAmount = "ExpenseAmount",
            Remarks = "Remarks",
            CreatedDate = "CreatedDate",
            Createdate = "Createdate",
            Createdby = "Createdby",
            Updatedby = "Updatedby",
            Updateddate = "Updateddate"
        }
    }
}

