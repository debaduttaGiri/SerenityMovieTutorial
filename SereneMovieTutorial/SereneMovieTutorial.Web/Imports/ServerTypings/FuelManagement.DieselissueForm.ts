namespace SereneMovieTutorial.FuelManagement {
    export interface DieselissueForm {
        VehicleId: Serenity.LookupEditor;
        Tripno: Serenity.LookupEditor;
        Plant: Serenity.LookupEditor;
        Distict: Serenity.LookupEditor;
        Destination: Serenity.LookupEditor;
        Pumpid: Serenity.LookupEditor;
        Stock: Serenity.DecimalEditor;
        Today: Serenity.DateEditor;
        Rateofdiesel: Serenity.DecimalEditor;
        Diesel: Serenity.DecimalEditor;
        Totalprice: Serenity.DecimalEditor;
    }

    export class DieselissueForm extends Serenity.PrefixedContext {
        static formKey = 'FuelManagement.Dieselissue';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DieselissueForm.init)  {
                DieselissueForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(DieselissueForm, [
                    'VehicleId', w0,
                    'Tripno', w0,
                    'Plant', w0,
                    'Distict', w0,
                    'Destination', w0,
                    'Pumpid', w0,
                    'Stock', w1,
                    'Today', w2,
                    'Rateofdiesel', w1,
                    'Diesel', w1,
                    'Totalprice', w1
                ]);
            }
        }
    }
}

