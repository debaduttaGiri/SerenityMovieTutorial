namespace SereneMovieTutorial.Inventry {
    export interface PurchaseOrderForm {
        PoNo: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        PartyId: Serenity.LookupEditor;
        BranchId: Serenity.LookupEditor;
        Remarks: Serenity.StringEditor;
        DetailList: PurchaseRequestDetailEditor;
    }

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.LookupEditor;
                var w3 = PurchaseRequestDetailEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'PoNo', w0,
                    'OrderDate', w1,
                    'PartyId', w2,
                    'BranchId', w2,
                    'Remarks', w0,
                    'DetailList', w3
                ]);
            }
        }
    }
}

