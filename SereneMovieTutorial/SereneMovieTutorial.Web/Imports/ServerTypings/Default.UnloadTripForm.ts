namespace SereneMovieTutorial.Default {
    export interface UnloadTripForm {
        LoadingTripId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        Plant: Serenity.StringEditor;
        District: Serenity.StringEditor;
        Destination: Serenity.StringEditor;
        VehicleName: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        Branch: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Item: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        UnloadWeight: Serenity.DecimalEditor;
        UnloadDate: Serenity.DateEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
    }

    export class UnloadTripForm extends Serenity.PrefixedContext {
        static formKey = 'Default.UnloadTrip';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnloadTripForm.init)  {
                UnloadTripForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(UnloadTripForm, [
                    'LoadingTripId', w0,
                    'TripNo', w1,
                    'TripDate', w2,
                    'Plant', w1,
                    'District', w1,
                    'Destination', w1,
                    'VehicleName', w1,
                    'CustomerName', w1,
                    'Branch', w1,
                    'State', w1,
                    'Item', w1,
                    'Weight', w3,
                    'Wheels', w0,
                    'ExpenseAmount', w3,
                    'UnloadWeight', w3,
                    'UnloadDate', w2,
                    'Remarks', w1,
                    'CreatedDate', w2
                ]);
            }
        }
    }
}

