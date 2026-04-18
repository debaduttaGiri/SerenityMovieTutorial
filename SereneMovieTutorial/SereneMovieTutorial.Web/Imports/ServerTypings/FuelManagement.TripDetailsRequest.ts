namespace SereneMovieTutorial.FuelManagement {
    export interface TripDetailsRequest extends Serenity.ServiceRequest {
        VehicleId?: number;
        Tripid?: number;
    }
}

