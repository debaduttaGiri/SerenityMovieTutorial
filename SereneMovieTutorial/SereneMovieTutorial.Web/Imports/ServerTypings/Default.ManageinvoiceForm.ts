namespace SereneMovieTutorial.Default {
    export interface ManageinvoiceForm {
        Plantid: Serenity.LookupEditor;
        LoadingTripId: Serenity.LookupEditor;
        Branchid: Serenity.LookupEditor;
        Totaltrips: Serenity.IntegerEditor;
        Invoiceno: Serenity.StringEditor;
        Pono: Serenity.IntegerEditor;
        Invoicedate: Serenity.DateEditor;
        Fromdate: Serenity.DateEditor;
        Todate: Serenity.DateEditor;
        Addgst: Serenity.BooleanEditor;
        Saccode: Serenity.IntegerEditor;
        Tax: Serenity.LookupEditor;
        Cgstrate: Serenity.DecimalEditor;
        Sgstrate: Serenity.DecimalEditor;
        Igstrate: Serenity.DecimalEditor;
        Cgstamount: Serenity.DecimalEditor;
        Sgstamount: Serenity.DecimalEditor;
        Igstamount: Serenity.DecimalEditor;
        Totalgstamount: Serenity.DecimalEditor;
        InvoiceDetails: ExInvoiceDetailsEditor;
        Totalinvoiceamount: Serenity.DecimalEditor;
    }

    export class ManageinvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Manageinvoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManageinvoiceForm.init)  {
                ManageinvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DecimalEditor;
                var w6 = ExInvoiceDetailsEditor;

                Q.initFormType(ManageinvoiceForm, [
                    'Plantid', w0,
                    'LoadingTripId', w0,
                    'Branchid', w0,
                    'Totaltrips', w1,
                    'Invoiceno', w2,
                    'Pono', w1,
                    'Invoicedate', w3,
                    'Fromdate', w3,
                    'Todate', w3,
                    'Addgst', w4,
                    'Saccode', w1,
                    'Tax', w0,
                    'Cgstrate', w5,
                    'Sgstrate', w5,
                    'Igstrate', w5,
                    'Cgstamount', w5,
                    'Sgstamount', w5,
                    'Igstamount', w5,
                    'Totalgstamount', w5,
                    'InvoiceDetails', w6,
                    'Totalinvoiceamount', w5
                ]);
            }
        }
    }
}

