namespace SereneMovieTutorial.Inventry {
    export interface PendingPurchaseOrderForm {
        PoNo: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        PartyId: Serenity.IntegerEditor;
        BranchId: Serenity.IntegerEditor;
        DetailId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        PartNo: Serenity.StringEditor;
        PreviousRate: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class PendingPurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.PendingPurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PendingPurchaseOrderForm.init)  {
                PendingPurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(PendingPurchaseOrderForm, [
                    'PoNo', w0,
                    'OrderDate', w1,
                    'PartyId', w2,
                    'BranchId', w2,
                    'DetailId', w2,
                    'ItemId', w2,
                    'PartNo', w0,
                    'PreviousRate', w3,
                    'CurrentRate', w3,
                    'Quantity', w3,
                    'UnitId', w2,
                    'TotalAmount', w3
                ]);
            }
        }
    }
}

