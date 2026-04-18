namespace SereneMovieTutorial.FuelManagement {
    export interface DieselissueRow {
        Id?: number;
        Tripno?: number;
        TripNumber?: string;
        VehicleId?: number;
        Vehiclenumber?: string;
        Plant?: number;
        PlantName?: string;
        Distict?: number;
        DistrictName?: string;
        Destination?: number;
        DestinationName?: string;
        Pumpid?: number;
        Stock?: number;
        Diesel?: number;
        Today?: string;
        Rateofdiesel?: number;
        Totalprice?: number;
        PumpName?: string;
        CreatedBy?: number;
        CreatedDate?: string;
        UpdatedBy?: number;
        UpdatedDate?: string;
        CreatedByUsername?: string;
        UpdatedByUsername?: string;
    }

    export namespace DieselissueRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Vehiclenumber';
        export const localTextPrefix = 'FuelManagement.Dieselissue';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Tripno = "Tripno",
            TripNumber = "TripNumber",
            VehicleId = "VehicleId",
            Vehiclenumber = "Vehiclenumber",
            Plant = "Plant",
            PlantName = "PlantName",
            Distict = "Distict",
            DistrictName = "DistrictName",
            Destination = "Destination",
            DestinationName = "DestinationName",
            Pumpid = "Pumpid",
            Stock = "Stock",
            Diesel = "Diesel",
            Today = "Today",
            Rateofdiesel = "Rateofdiesel",
            Totalprice = "Totalprice",
            PumpName = "PumpName",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            UpdatedBy = "UpdatedBy",
            UpdatedDate = "UpdatedDate",
            CreatedByUsername = "CreatedByUsername",
            UpdatedByUsername = "UpdatedByUsername"
        }
    }
}

