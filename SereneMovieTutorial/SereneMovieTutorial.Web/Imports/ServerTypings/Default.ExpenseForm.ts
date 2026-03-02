namespace SereneMovieTutorial.Default {
    export interface ExpenseForm {
        Plant: Serenity.LookupEditor;
        District: Serenity.LookupEditor;
        Destination: Serenity.LookupEditor;
        Expense: Serenity.DecimalEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    export class ExpenseForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Expense';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpenseForm.init)  {
                ExpenseForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;

                Q.initFormType(ExpenseForm, [
                    'Plant', w0,
                    'District', w0,
                    'Destination', w0,
                    'Expense', w1,
                    'Weight', w1,
                    'Wheels', w2,
                    'Remarks', w3
                ]);
            }
        }
    }
}

