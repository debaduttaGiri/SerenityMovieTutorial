namespace SereneMovieTutorial.Inventry {
    export namespace PendingPurchaseOrderService {
        export const baseUrl = 'Inventry/PendingPurchaseOrder';

        export declare function Create(request: Serenity.SaveRequest<PendingPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PendingPurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PendingPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PendingPurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetSelectedTrips(request: TripRequest, onSuccess?: (response: TripResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventry/PendingPurchaseOrder/Create",
            Update = "Inventry/PendingPurchaseOrder/Update",
            Delete = "Inventry/PendingPurchaseOrder/Delete",
            Retrieve = "Inventry/PendingPurchaseOrder/Retrieve",
            List = "Inventry/PendingPurchaseOrder/List",
            GetSelectedTrips = "Inventry/PendingPurchaseOrder/GetSelectedTrips"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetSelectedTrips'
        ].forEach(x => {
            (<any>PendingPurchaseOrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

