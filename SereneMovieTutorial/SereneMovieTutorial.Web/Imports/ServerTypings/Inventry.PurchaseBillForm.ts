namespace SereneMovieTutorial.Inventry {
    export interface PurchaseBillForm {
        PartyId: Serenity.LookupEditor;
        DebitLedgerId: Serenity.IntegerEditor;
        BillNo: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        Gstin: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        RoundOff: Serenity.DecimalEditor;
        TotalBillAmount: Serenity.DecimalEditor;
        StockInDate: Serenity.DateEditor;
        PurchaseDetails: ExPurchaseBillDetailEditor;
        TaxableAmount: Serenity.DecimalEditor;
        CgstAmount: Serenity.DecimalEditor;
        SgstAmount: Serenity.DecimalEditor;
        IgstAmount: Serenity.DecimalEditor;
        TdsSection: Serenity.StringEditor;
        TdsRate: Serenity.DecimalEditor;
        TdsAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        LedgerTypeId: Serenity.IntegerEditor;
        TDSLedger: Serenity.IntegerEditor;
        CgstLedger: Serenity.IntegerEditor;
        SgstLedger: Serenity.IntegerEditor;
        IgstLedger: Serenity.IntegerEditor;
    }

    export class PurchaseBillForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.PurchaseBill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseBillForm.init)  {
                PurchaseBillForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;
                var w5 = ExPurchaseBillDetailEditor;

                Q.initFormType(PurchaseBillForm, [
                    'PartyId', w0,
                    'DebitLedgerId', w1,
                    'BillNo', w2,
                    'BillDate', w3,
                    'Gstin', w2,
                    'PoNumber', w2,
                    'RoundOff', w4,
                    'TotalBillAmount', w4,
                    'StockInDate', w3,
                    'PurchaseDetails', w5,
                    'TaxableAmount', w4,
                    'CgstAmount', w4,
                    'SgstAmount', w4,
                    'IgstAmount', w4,
                    'TdsSection', w2,
                    'TdsRate', w4,
                    'TdsAmount', w4,
                    'Remarks', w2,
                    'LedgerTypeId', w1,
                    'TDSLedger', w1,
                    'CgstLedger', w1,
                    'SgstLedger', w1,
                    'IgstLedger', w1
                ]);
            }
        }
    }
}

