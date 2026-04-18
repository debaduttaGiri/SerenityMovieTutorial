namespace SereneMovieTutorial.Default {
    export namespace PumpmasterService {
        export const baseUrl = 'Default/Pumpmaster';

        export declare function Create(request: Serenity.SaveRequest<PumpmasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PumpmasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PumpmasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PumpmasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetPumpStock(request: PumpStockRequest, onSuccess?: (response: PumpStockResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/Pumpmaster/Create",
            Update = "Default/Pumpmaster/Update",
            Delete = "Default/Pumpmaster/Delete",
            Retrieve = "Default/Pumpmaster/Retrieve",
            List = "Default/Pumpmaster/List",
            GetPumpStock = "Default/Pumpmaster/GetPumpStock"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetPumpStock'
        ].forEach(x => {
            (<any>PumpmasterService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

