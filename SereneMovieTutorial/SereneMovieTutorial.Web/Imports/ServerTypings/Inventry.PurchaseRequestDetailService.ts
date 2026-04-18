namespace SereneMovieTutorial.Inventry {
    export namespace PurchaseRequestDetailService {
        export const baseUrl = 'Inventry/PurchaseRequestDetail';

        export declare function Create(request: Serenity.SaveRequest<PurchaseRequestDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseRequestDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequestDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequestDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetItemDetails(request: ItemDetailsRequest, onSuccess?: (response: ItempDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventry/PurchaseRequestDetail/Create",
            Update = "Inventry/PurchaseRequestDetail/Update",
            Delete = "Inventry/PurchaseRequestDetail/Delete",
            Retrieve = "Inventry/PurchaseRequestDetail/Retrieve",
            List = "Inventry/PurchaseRequestDetail/List",
            GetItemDetails = "Inventry/PurchaseRequestDetail/GetItemDetails"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetItemDetails'
        ].forEach(x => {
            (<any>PurchaseRequestDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

