namespace SereneMovieTutorial.Modules.Default.VehicleMaster {
    export enum FuelType {
        Petrol = 1,
        Diesel = 2,
        CNG = 3,
        LPG = 4
    }
    Serenity.Decorators.registerEnumType(FuelType, 'SereneMovieTutorial.Modules.Default.VehicleMaster.FuelType');
}

