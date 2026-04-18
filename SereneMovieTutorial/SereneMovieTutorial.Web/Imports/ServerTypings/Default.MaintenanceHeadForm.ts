namespace SereneMovieTutorial.Default {
    export interface MaintenanceHeadForm {
        Head: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
        CreatedBy: Serenity.IntegerEditor;
        UpdatedBy: Serenity.IntegerEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedDate: Serenity.DateEditor;
    }

    export class MaintenanceHeadForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MaintenanceHead';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaintenanceHeadForm.init)  {
                MaintenanceHeadForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MaintenanceHeadForm, [
                    'Head', w0,
                    'Remarks', w0,
                    'CreatedBy', w1,
                    'UpdatedBy', w1,
                    'CreatedDate', w2,
                    'UpdatedDate', w2
                ]);
            }
        }
    }
}

