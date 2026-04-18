namespace SereneMovieTutorial.FuelManagement {
    export interface FuelDataForm {
        InwardNo: Serenity.StringEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        TankerNo: Serenity.StringEditor;
        QtyKl: Serenity.DecimalEditor;
        RateKl: Serenity.DecimalEditor;
        BasicAmount: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        QuantityLtr: Serenity.DecimalEditor;
        RateLtr: Serenity.DecimalEditor;
        TransportationRate: Serenity.DecimalEditor;
        TransportationAmt: Serenity.DecimalEditor;
        ShortageKl: Serenity.DecimalEditor;
        ShortageLtr: Serenity.DecimalEditor;
        ShortageAmt: Serenity.DecimalEditor;
        ReceiptDate: Serenity.DateEditor;
        TransporterId: Serenity.IntegerEditor;
        PartyId: Serenity.IntegerEditor;
        TdsPayable: Serenity.BooleanEditor;
        TdsAccountId: Serenity.IntegerEditor;
        TdsSection: Serenity.StringEditor;
        TdsPercent: Serenity.DecimalEditor;
        TdsAmount: Serenity.DecimalEditor;
        DrAccountId: Serenity.IntegerEditor;
        ShortageDrAccount: Serenity.IntegerEditor;
        ShortageCrAccount: Serenity.IntegerEditor;
        ShowFuelDetails: Serenity.EnumEditor;
        FuelDetails: FuelDetailsEditor;
        AllottedQuantity: Serenity.DecimalEditor;
    }

    export class FuelDataForm extends Serenity.PrefixedContext {
        static formKey = 'FuelManagement.FuelData';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FuelDataForm.init)  {
                FuelDataForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.EnumEditor;
                var w6 = FuelDetailsEditor;

                Q.initFormType(FuelDataForm, [
                    'InwardNo', w0,
                    'InvoiceNo', w0,
                    'InvoiceDate', w1,
                    'TankerNo', w0,
                    'QtyKl', w2,
                    'RateKl', w2,
                    'BasicAmount', w2,
                    'TotalAmount', w2,
                    'QuantityLtr', w2,
                    'RateLtr', w2,
                    'TransportationRate', w2,
                    'TransportationAmt', w2,
                    'ShortageKl', w2,
                    'ShortageLtr', w2,
                    'ShortageAmt', w2,
                    'ReceiptDate', w1,
                    'TransporterId', w3,
                    'PartyId', w3,
                    'TdsPayable', w4,
                    'TdsAccountId', w3,
                    'TdsSection', w0,
                    'TdsPercent', w2,
                    'TdsAmount', w2,
                    'DrAccountId', w3,
                    'ShortageDrAccount', w3,
                    'ShortageCrAccount', w3,
                    'ShowFuelDetails', w5,
                    'FuelDetails', w6,
                    'AllottedQuantity', w2
                ]);
            }
        }
    }
}

