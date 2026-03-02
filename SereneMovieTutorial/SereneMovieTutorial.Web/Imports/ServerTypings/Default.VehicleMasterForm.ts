namespace SereneMovieTutorial.Default {
    export interface VehicleMasterForm {
        VehicleNumber: Serenity.StringEditor;
        VehicleType: Serenity.EnumEditor;
        Brand: Serenity.StringEditor;
        Model: Serenity.StringEditor;
        ManufacturingYear: Serenity.IntegerEditor;
        FuelType: Serenity.EnumEditor;
        EngineNumber: Serenity.StringEditor;
        ChassisNumber: Serenity.StringEditor;
        Color: Serenity.StringEditor;
        SeatingCapacity: Serenity.IntegerEditor;
        CustomerId: Serenity.LookupEditor;
        InsuranceExpiryDate: Serenity.DateEditor;
        Wheels: Serenity.StringEditor;
        IsActive: Serenity.BooleanEditor;
        CreatedDate: Serenity.DateEditor;
    }

    export class VehicleMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.VehicleMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VehicleMasterForm.init)  {
                VehicleMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DateEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(VehicleMasterForm, [
                    'VehicleNumber', w0,
                    'VehicleType', w1,
                    'Brand', w0,
                    'Model', w0,
                    'ManufacturingYear', w2,
                    'FuelType', w1,
                    'EngineNumber', w0,
                    'ChassisNumber', w0,
                    'Color', w0,
                    'SeatingCapacity', w2,
                    'CustomerId', w3,
                    'InsuranceExpiryDate', w4,
                    'Wheels', w0,
                    'IsActive', w5,
                    'CreatedDate', w4
                ]);
            }
        }
    }
}

