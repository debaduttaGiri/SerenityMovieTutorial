namespace SereneMovieTutorial.Default {
    export interface BranchMasterForm {
        BranchName: Serenity.StringEditor;
        BranchCode: Serenity.StringEditor;
        GstNo: Serenity.IntegerEditor;
        PanNo: Serenity.IntegerEditor;
        PhoneNumber: Serenity.IntegerEditor;
        PinCode: Serenity.IntegerEditor;
        Address: Serenity.TextAreaEditor;
        StateId: Serenity.LookupEditor;
        Remarks: Serenity.StringEditor;
    }

    export class BranchMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.BranchMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BranchMasterForm.init)  {
                BranchMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(BranchMasterForm, [
                    'BranchName', w0,
                    'BranchCode', w0,
                    'GstNo', w1,
                    'PanNo', w1,
                    'PhoneNumber', w1,
                    'PinCode', w1,
                    'Address', w2,
                    'StateId', w3,
                    'Remarks', w0
                ]);
            }
        }
    }
}

