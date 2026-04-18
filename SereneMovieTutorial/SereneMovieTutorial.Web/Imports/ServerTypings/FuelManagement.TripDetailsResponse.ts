namespace SereneMovieTutorial.FuelManagement {
    export interface TripDetailsResponse extends Serenity.ServiceResponse {
        Details?: Default.LoadingTripRow;
        ErrorMsg?: string;
    }
}

