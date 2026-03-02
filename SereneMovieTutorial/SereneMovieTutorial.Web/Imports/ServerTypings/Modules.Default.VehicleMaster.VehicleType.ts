namespace SereneMovieTutorial.Modules.Default.VehicleMaster {
    export enum VehicleType {
        Truck = 1,
        Bus = 2,
        Van = 3,
        Car = 4
    }
    Serenity.Decorators.registerEnumType(VehicleType, 'SereneMovieTutorial.Modules.Default.VehicleMaster.VehicleType');
}

