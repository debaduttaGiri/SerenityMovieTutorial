namespace SereneMovieTutorial.Modules.Default.CustomerMaster {
    export enum IdentityType {
        PAN = 1,
        Aadhar = 2,
        DrivingLicence = 3
    }
    Serenity.Decorators.registerEnumType(IdentityType, 'SereneMovieTutorial.Modules.Default.CustomerMaster.IdentityType');
}

