namespace SereneMovieTutorial.Default {
    export namespace LoadingTripService {
        export const baseUrl = 'Default/LoadingTrip';

        export declare function Create(request: Serenity.SaveRequest<LoadingTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<LoadingTripRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LoadingTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LoadingTripRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetVehicleDetails(request: VehicleDetailsRequest, onSuccess?: (response: VehicleDetailsResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetBranch(request: Serenity.ServiceRequest, onSuccess?: (response: BranchResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetExpenseByRoute(request: ExpenseRequest, onSuccess?: (response: ExpenseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetWeightSummary(request: Serenity.ServiceRequest, onSuccess?: (response: System.Object) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Default/LoadingTrip/Create",
            Update = "Default/LoadingTrip/Update",
            Delete = "Default/LoadingTrip/Delete",
            Retrieve = "Default/LoadingTrip/Retrieve",
            List = "Default/LoadingTrip/List",
            GetVehicleDetails = "Default/LoadingTrip/GetVehicleDetails",
            GetBranch = "Default/LoadingTrip/GetBranch",
            GetExpenseByRoute = "Default/LoadingTrip/GetExpenseByRoute",
            GetWeightSummary = "Default/LoadingTrip/GetWeightSummary"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetVehicleDetails', 
            'GetBranch', 
            'GetExpenseByRoute', 
            'GetWeightSummary'
        ].forEach(x => {
            (<any>LoadingTripService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

