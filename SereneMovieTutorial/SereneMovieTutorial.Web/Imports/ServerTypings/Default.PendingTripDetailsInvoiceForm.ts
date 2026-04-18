namespace SereneMovieTutorial.Default {
    export interface PendingTripDetailsInvoiceForm {
        TripNo: Serenity.StringEditor;
        TripDate: Serenity.DateEditor;
        PlantId: Serenity.IntegerEditor;
        PlantName: Serenity.StringEditor;
        DistrictId: Serenity.IntegerEditor;
        DistrictName: Serenity.StringEditor;
        DestinationId: Serenity.IntegerEditor;
        DestinationName: Serenity.StringEditor;
        VehicleId: Serenity.IntegerEditor;
        VehicleNumber: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
        CustomerName: Serenity.StringEditor;
        BranchId: Serenity.IntegerEditor;
        BranchName: Serenity.StringEditor;
        StateId: Serenity.IntegerEditor;
        StateName: Serenity.StringEditor;
        ItemId: Serenity.IntegerEditor;
        ItemName: Serenity.StringEditor;
        Weight: Serenity.DecimalEditor;
        Wheels: Serenity.IntegerEditor;
        FreightRate: Serenity.IntegerEditor;
        ExpenseAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        Createdate: Serenity.DateEditor;
        Createdby: Serenity.IntegerEditor;
        Updatedby: Serenity.IntegerEditor;
        Updateddate: Serenity.DateEditor;
    }

    export class PendingTripDetailsInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PendingTripDetailsInvoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PendingTripDetailsInvoiceForm.init)  {
                PendingTripDetailsInvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(PendingTripDetailsInvoiceForm, [
                    'TripNo', w0,
                    'TripDate', w1,
                    'PlantId', w2,
                    'PlantName', w0,
                    'DistrictId', w2,
                    'DistrictName', w0,
                    'DestinationId', w2,
                    'DestinationName', w0,
                    'VehicleId', w2,
                    'VehicleNumber', w0,
                    'CustomerId', w2,
                    'CustomerName', w0,
                    'BranchId', w2,
                    'BranchName', w0,
                    'StateId', w2,
                    'StateName', w0,
                    'ItemId', w2,
                    'ItemName', w0,
                    'Weight', w3,
                    'Wheels', w2,
                    'FreightRate', w2,
                    'ExpenseAmount', w3,
                    'Remarks', w0,
                    'CreatedDate', w1,
                    'Createdate', w1,
                    'Createdby', w2,
                    'Updatedby', w2,
                    'Updateddate', w1
                ]);
            }
        }
    }
}

