namespace SereneMovieTutorial.FuelManagement {
    export interface FuelDetailsForm {
        PumpId: Serenity.LookupEditor;
        TankerNo: Serenity.StringEditor;
        ReceiptDate: Serenity.DateEditor;
        Quantity: Serenity.DecimalEditor;
    }

    export class FuelDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'FuelManagement.FuelDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FuelDetailsForm.init)  {
                FuelDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(FuelDetailsForm, [
                    'PumpId', w0,
                    'TankerNo', w1,
                    'ReceiptDate', w2,
                    'Quantity', w3
                ]);
            }
        }
    }
}

