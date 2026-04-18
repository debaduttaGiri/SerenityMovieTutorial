namespace SereneMovieTutorial.Inventry {
    export interface TripRequest extends Serenity.ServiceRequest {
        Ids?: string[];
        purchase?: string[];
    }
}

