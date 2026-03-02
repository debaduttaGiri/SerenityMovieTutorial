namespace SereneMovieTutorial.Default {
    export interface EmployeesForm {
        FullName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Extension: Serenity.StringEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmployeesForm, [
                    'FullName', w0,
                    'Title', w0,
                    'TitleOfCourtesy', w0,
                    'BirthDate', w1,
                    'HireDate', w1,
                    'Address', w0,
                    'City', w0,
                    'Region', w0,
                    'PostalCode', w0,
                    'Country', w0,
                    'HomePhone', w0,
                    'Extension', w0
                ]);
            }
        }
    }
}

