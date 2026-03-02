namespace SereneMovieTutorial.Default {
    export interface LoadingTripForm {
        BranchId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        StateId: Serenity.LookupEditor;
        ItemId: Serenity.LookupEditor;
        Branch: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        PlantId: Serenity.LookupEditor;
        VehicleId: Serenity.LookupEditor;
        DistrictId: Serenity.LookupEditor;
        CustomerId: Serenity.LookupEditor;
        DestinationId: Serenity.LookupEditor;
        Wheels: Serenity.IntegerEditor;
        Weight: Serenity.DecimalEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.TextAreaEditor;
    }

    export class LoadingTripForm extends Serenity.PrefixedContext {
        static formKey = 'Default.LoadingTrip';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LoadingTripForm.init)  {
                LoadingTripForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(LoadingTripForm, [
                    'BranchId', w0,
                    'TripNo', w1,
                    'TripDate', w2,
                    'StateId', w3,
                    'ItemId', w3,
                    'Branch', w1,
                    'CreatedDate', w2,
                    'PlantId', w3,
                    'VehicleId', w3,
                    'DistrictId', w3,
                    'CustomerId', w3,
                    'DestinationId', w3,
                    'Wheels', w0,
                    'Weight', w4,
                    'ExpenseAmount', w4,
                    'Remarks', w5
                ]);
            }
        }
    }
}

