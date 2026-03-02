namespace SereneMovieTutorial.Default {
    export interface FinancialYearForm {
        Name: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        NameOfInvoice: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class FinancialYearForm extends Serenity.PrefixedContext {
        static formKey = 'Default.FinancialYear';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FinancialYearForm.init)  {
                FinancialYearForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(FinancialYearForm, [
                    'Name', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'NameOfInvoice', w0,
                    'Remarks', w0
                ]);
            }
        }
    }
}

