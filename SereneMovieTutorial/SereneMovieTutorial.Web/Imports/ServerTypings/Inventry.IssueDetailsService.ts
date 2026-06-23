namespace SereneMovieTutorial.Inventry {
    export namespace IssueDetailsService {
        export const baseUrl = 'Inventry/IssueDetails';

        export declare function Create(request: Serenity.SaveRequest<IssueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<IssueDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IssueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IssueDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetItemDetails(request: GetItemRequest, onSuccess?: (response: GetItemResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventry/IssueDetails/Create",
            Update = "Inventry/IssueDetails/Update",
            Delete = "Inventry/IssueDetails/Delete",
            Retrieve = "Inventry/IssueDetails/Retrieve",
            List = "Inventry/IssueDetails/List",
            GetItemDetails = "Inventry/IssueDetails/GetItemDetails"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetItemDetails'
        ].forEach(x => {
            (<any>IssueDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

