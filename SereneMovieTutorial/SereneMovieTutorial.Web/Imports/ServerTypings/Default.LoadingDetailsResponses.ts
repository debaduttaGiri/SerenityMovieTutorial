namespace SereneMovieTutorial.Default {
    export interface LoadingDetailsResponses extends Serenity.ServiceResponse {
        Details?: LoadingTripRow;
        ErrorMsg?: string;
    }
}

