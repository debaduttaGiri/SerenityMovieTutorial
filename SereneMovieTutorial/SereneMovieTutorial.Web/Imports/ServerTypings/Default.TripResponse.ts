namespace SereneMovieTutorial.Default {
    export interface TripResponse extends Serenity.ServiceResponse {
        Trips?: PendingTripDetailsInvoiceRow[];
        ErrorMsg?: string;
    }
}

