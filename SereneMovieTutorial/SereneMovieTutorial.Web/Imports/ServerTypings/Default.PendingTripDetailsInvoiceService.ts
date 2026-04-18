namespace SereneMovieTutorial.Default {
    export namespace PendingTripDetailsInvoiceService {
        export const baseUrl = 'Default/PendingTripDetailsInvoice';

        export declare function Create(request: Serenity.SaveRequest<PendingTripDetailsInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PendingTripDetailsInvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PendingTripDetailsInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PendingTripDetailsInvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelectedTrips(request: TripRequest, onSuccess?: (response: TripResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/PendingTripDetailsInvoice/Create",
            Update = "Default/PendingTripDetailsInvoice/Update",
            Delete = "Default/PendingTripDetailsInvoice/Delete",
            Retrieve = "Default/PendingTripDetailsInvoice/Retrieve",
            List = "Default/PendingTripDetailsInvoice/List",
            GetSelectedTrips = "Default/PendingTripDetailsInvoice/GetSelectedTrips"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetSelectedTrips'
        ].forEach(x => {
            (<any>PendingTripDetailsInvoiceService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

