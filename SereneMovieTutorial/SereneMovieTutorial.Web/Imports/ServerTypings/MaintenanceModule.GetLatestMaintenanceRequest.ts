namespace SereneMovieTutorial.MaintenanceModule {
    export interface GetLatestMaintenanceRequest extends Serenity.ServiceRequest {
        TruckId?: number;
        HeadId?: number;
    }
}

