namespace SereneMovieTutorial.FuelManagement {
    export namespace DieselissueService {
        export const baseUrl = 'FuelManagement/Dieselissue';

        export declare function Create(request: Serenity.SaveRequest<DieselissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DieselissueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DieselissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DieselissueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDieselRate(request: Modules.FuelManagement.Dieselissue.DieselRateRequest, onSuccess?: (response: any) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTripDetails(request: TripDetailsRequest, onSuccess?: (response: TripDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "FuelManagement/Dieselissue/Create",
            Update = "FuelManagement/Dieselissue/Update",
            Delete = "FuelManagement/Dieselissue/Delete",
            Retrieve = "FuelManagement/Dieselissue/Retrieve",
            List = "FuelManagement/Dieselissue/List",
            GetDieselRate = "FuelManagement/Dieselissue/GetDieselRate",
            GetTripDetails = "FuelManagement/Dieselissue/GetTripDetails"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetDieselRate', 
            'GetTripDetails'
        ].forEach(x => {
            (<any>DieselissueService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

