namespace SereneMovieTutorial.Inventry {
    export interface PurchaseBillDetailForm {
        PurchaseBillId: Serenity.IntegerEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        ItemName: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        PreviousRate: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxableAmount: Serenity.DecimalEditor;
        CgstRate: Serenity.DecimalEditor;
        SgstRate: Serenity.DecimalEditor;
        IgstRate: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }

    export class PurchaseBillDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.PurchaseBillDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseBillDetailForm.init)  {
                PurchaseBillDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseBillDetailForm, [
                    'PurchaseBillId', w0,
                    'PurchaseOrderId', w0,
                    'ItemId', w0,
                    'ItemName', w1,
                    'Quantity', w2,
                    'CurrentRate', w2,
                    'PreviousRate', w2,
                    'Discount', w2,
                    'TaxableAmount', w2,
                    'CgstRate', w2,
                    'SgstRate', w2,
                    'IgstRate', w2,
                    'CgstAmount', w2,
                    'SgstAmount', w2,
                    'IgstAmount', w2,
                    'TotalAmount', w2,
                    'Remarks', w1
                ]);
            }
        }
    }
}

