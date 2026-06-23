namespace SereneMovieTutorial.Inventry {
    export interface IssueHeaderForm {
        IssueNo: Serenity.StringEditor;
        VehicleId: Serenity.LookupEditor;
        Owner: Serenity.StringEditor;
        IssueDate: Serenity.DateEditor;
        IssueDetails: ExIssueDetailsEditor;
    }

    export class IssueHeaderForm extends Serenity.PrefixedContext {
        static formKey = 'Inventry.IssueHeader';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IssueHeaderForm.init)  {
                IssueHeaderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = ExIssueDetailsEditor;

                Q.initFormType(IssueHeaderForm, [
                    'IssueNo', w0,
                    'VehicleId', w1,
                    'Owner', w0,
                    'IssueDate', w2,
                    'IssueDetails', w3
                ]);
            }
        }
    }
}

