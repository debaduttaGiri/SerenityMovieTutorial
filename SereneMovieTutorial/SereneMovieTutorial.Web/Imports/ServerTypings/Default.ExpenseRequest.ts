namespace SereneMovieTutorial.Default {
    export interface ExpenseRequest extends Serenity.ServiceRequest {
        PlantId?: number;
        DistrictId?: number;
        DestinationId?: number;
        Wheels?: number;
        Weight?: number;
    }
}

