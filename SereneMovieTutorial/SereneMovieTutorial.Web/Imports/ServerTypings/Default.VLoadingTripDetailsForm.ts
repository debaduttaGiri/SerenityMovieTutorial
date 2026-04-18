namespace SereneMovieTutorial.Default {
    export interface VLoadingTripDetailsForm {
        LoadingTripId: Serenity.IntegerEditor;
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        PlantName: Serenity.StringEditor;
        DistrictName: Serenity.StringEditor;
        DestinationName: Serenity.StringEditor;
        VehicleNumber: Serenity.StringEditor;
        CustomerName: Serenity.StringEditor;
        BranchName: Serenity.StringEditor;
        StateName: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
    }

    export class VLoadingTripDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.VLoadingTripDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VLoadingTripDetailsForm.init)  {
                VLoadingTripDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(VLoadingTripDetailsForm, [
                    'LoadingTripId', w0,
                    'TripNo', w1,
                    'TripDate', w2,
                    'PlantName', w1,
                    'DistrictName', w1,
                    'DestinationName', w1,
                    'VehicleNumber', w1,
                    'CustomerName', w1,
                    'BranchName', w1,
                    'StateName', w1,
                    'ItemName', w1,
                    'Weight', w3,
                    'Wheels', w0,
                    'ExpenseAmount', w3,
                    'Remarks', w1,
                    'CreatedDate', w2
                ]);
            }
        }
    }
}

