namespace SereneMovieTutorial.Inventry {
    export interface PurchaseRequestDetailForm {
        PoNo: Serenity.StringEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        ItemId: Serenity.LookupEditor;
        PartNo: Serenity.StringEditor;
        PreviousRate: Serenity.DecimalEditor;
        BalanceStock: Serenity.DecimalEditor;
        StockLevelMax: Serenity.DecimalEditor;
        StockLevelMin: Serenity.DecimalEditor;
        CurrentRate: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        UnitId: Serenity.LookupEditor;
        BasicAmount: Serenity.DecimalEditor;
        CgstRate: Serenity.DecimalEditor;
        SgstRate: Serenity.DecimalEditor;
        IgstRate: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class PurchaseRequestDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.PurchaseRequestDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseRequestDetailForm.init)  {
                PurchaseRequestDetailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(PurchaseRequestDetailForm, [
                    'PoNo', w0,
                    'PurchaseOrderId', w1,
                    'ItemId', w2,
                    'PartNo', w0,
                    'PreviousRate', w3,
                    'BalanceStock', w3,
                    'StockLevelMax', w3,
                    'StockLevelMin', w3,
                    'CurrentRate', w3,
                    'Quantity', w3,
                    'UnitId', w2,
                    'BasicAmount', w3,
                    'CgstRate', w3,
                    'SgstRate', w3,
                    'IgstRate', w3,
                    'CgstAmount', w3,
                    'SgstAmount', w3,
                    'IgstAmount', w3,
                    'TotalAmount', w3
                ]);
            }
        }
    }
}

