namespace SereneMovieTutorial.Default {

    export interface VehicleDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
    }

    export interface VehicleDetailsResponse extends Serenity.ServiceResponse {
        Details?: VehicleDetailsDto;
    }

    export interface VehicleDetailsDto {
        CustomerId?: number;
        Wheels?: number;
        //Weight?: number;
    }
    export interface ExpenseLookupRequest extends Serenity.ServiceRequest {
        PlantId?: number;
        DistrictId?: number;
        DestinationId?: number;
        Weight: number;
    }

    export interface ExpenseLookupResponse extends Serenity.ServiceResponse {
        ExpenseAmount?: number;
        //Weight?: number;
    }
}
