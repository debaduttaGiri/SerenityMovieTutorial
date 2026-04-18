namespace SereneMovieTutorial.Default {
    export interface InvoicedetailsForm {
        Challan: Serenity.IntegerEditor;
        Lrno: Serenity.StringEditor;
        Vehicleid: Serenity.IntegerEditor;
        VehicleNumber: Serenity.StringEditor;
        freightRate: Serenity.IntegerEditor;
        Weight: Serenity.DecimalEditor;
        Billingamount: Serenity.DecimalEditor;
        Invoicedate: Serenity.DateEditor;
        LoadingTripId: Serenity.IntegerEditor;
    }

    export class InvoicedetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Invoicedetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicedetailsForm.init)  {
                InvoicedetailsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(InvoicedetailsForm, [
                    'Challan', w0,
                    'Lrno', w1,
                    'Vehicleid', w0,
                    'VehicleNumber', w1,
                    'freightRate', w0,
                    'Weight', w2,
                    'Billingamount', w2,
                    'Invoicedate', w3,
                    'LoadingTripId', w0
                ]);
            }
        }
    }
}

