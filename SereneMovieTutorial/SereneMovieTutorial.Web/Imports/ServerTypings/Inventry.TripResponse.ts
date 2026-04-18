namespace SereneMovieTutorial.Inventry {
    export interface TripResponse extends Serenity.ServiceResponse {
        Trips?: PendingPurchaseOrderRow[];
        ErrorMsg?: string;
    }
}

