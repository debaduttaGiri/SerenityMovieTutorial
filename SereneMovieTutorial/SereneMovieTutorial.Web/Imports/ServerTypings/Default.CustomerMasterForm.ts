namespace SereneMovieTutorial.Default {
    export interface CustomerMasterForm {
        CustomerCode: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        AddressLine1: Serenity.StringEditor;
        AddressLine2: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Pincode: Serenity.StringEditor;
        IdentityType: Serenity.EnumEditor;
        IdentityNumber: Serenity.StringEditor;
        DateOfBirth: Serenity.DateEditor;
        IsActive: Serenity.BooleanEditor;
        CreatedDate: Serenity.DateEditor;
    }

    export class CustomerMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerMaster';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerMasterForm.init)  {
                CustomerMasterForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(CustomerMasterForm, [
                    'CustomerCode', w0,
                    'FirstName', w0,
                    'LastName', w0,
                    'MobileNumber', w0,
                    'Email', w0,
                    'AddressLine1', w0,
                    'AddressLine2', w0,
                    'City', w0,
                    'State', w0,
                    'Pincode', w0,
                    'IdentityType', w1,
                    'IdentityNumber', w0,
                    'DateOfBirth', w2,
                    'IsActive', w3,
                    'CreatedDate', w2
                ]);
            }
        }
    }
}

