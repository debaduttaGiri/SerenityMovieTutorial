namespace SereneMovieTutorial.Inventry {
    export interface IssueDetailsForm {
        ItemId: Serenity.LookupEditor;
        IssueId: Serenity.IntegerEditor;
        PartNumber: Serenity.LookupEditor;
        PartName: Serenity.LookupEditor;
        Company: Serenity.StringEditor;
        Rate: Serenity.DecimalEditor;
        Qty: Serenity.IntegerEditor;
        PartAmount: Serenity.DecimalEditor;
        StockAsOnDate: Serenity.DecimalEditor;
        TotalStock: Serenity.IntegerEditor;
    }

    export class IssueDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.IssueDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IssueDetailsForm.init)  {
                IssueDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(IssueDetailsForm, [
                    'ItemId', w0,
                    'IssueId', w1,
                    'PartNumber', w0,
                    'PartName', w0,
                    'Company', w2,
                    'Rate', w3,
                    'Qty', w1,
                    'PartAmount', w3,
                    'StockAsOnDate', w3,
                    'TotalStock', w1
                ]);
            }
        }
    }
}

