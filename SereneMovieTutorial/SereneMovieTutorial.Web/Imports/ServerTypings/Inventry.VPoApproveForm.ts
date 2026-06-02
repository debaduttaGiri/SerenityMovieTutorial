namespace SereneMovieTutorial.Inventry {
    export interface VPoApproveForm {
        PoNo: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        PartyId: Serenity.IntegerEditor;
        BranchId: Serenity.IntegerEditor;
        CreatedBy: Serenity.IntegerEditor;
        CreatedDate: Serenity.DateEditor;
        UpdatedBy: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        Status: Serenity.BooleanEditor;
    }

    export class VPoApproveForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.VPoApprove';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VPoApproveForm.init)  {
                VPoApproveForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(VPoApproveForm, [
                    'PoNo', w0,
                    'OrderDate', w1,
                    'PartyId', w2,
                    'BranchId', w2,
                    'CreatedBy', w2,
                    'CreatedDate', w1,
                    'UpdatedBy', w2,
                    'UpdateDate', w1,
                    'Status', w3
                ]);
            }
        }
    }
}

