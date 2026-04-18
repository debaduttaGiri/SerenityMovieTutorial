namespace SereneMovieTutorial.Default {
    export interface TaxForm {
        TaxAmount: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    export class TaxForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Tax';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TaxForm.init)  {
                TaxForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TaxForm, [
                    'TaxAmount', w0,
                    'Remarks', w1
                ]);
            }
        }
    }
}

