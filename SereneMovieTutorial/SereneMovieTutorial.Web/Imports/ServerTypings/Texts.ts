namespace SereneMovieTutorial.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Default {

            namespace BranchMaster {
                export const Address: string;
                export const BranchCode: string;
                export const BranchName: string;
                export const GstNo: string;
                export const Id: string;
                export const PanNo: string;
                export const PhoneNumber: string;
                export const PinCode: string;
                export const Remarks: string;
                export const State: string;
                export const State1: string;
                export const StateId: string;
                export const StateRemarks: string;
                export const StateStateCode: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerId: string;
                export const Fax: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
            }

            namespace CustomerMaster {
                export const AddressLine1: string;
                export const AddressLine2: string;
                export const City: string;
                export const CreatedDate: string;
                export const CustomerCode: string;
                export const CustomerId: string;
                export const DateOfBirth: string;
                export const Email: string;
                export const FirstName: string;
                export const IdentityNumber: string;
                export const IdentityType: string;
                export const IsActive: string;
                export const LastName: string;
                export const MobileNumber: string;
                export const Pincode: string;
                export const State: string;
            }

            namespace Destination {
                export const Destination: string;
                export const Distict: string;
                export const Distict1: string;
                export const DistictPlant: string;
                export const DistictRemarks: string;
                export const Id: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
            }

            namespace Distict {
                export const Distict: string;
                export const Id: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
            }

            namespace Employees {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeId: string;
                export const Extension: string;
                export const FullName: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace Expense {
                export const Destination: string;
                export const Destination1: string;
                export const DestinationDistict: string;
                export const DestinationPlant: string;
                export const DestinationRemarks: string;
                export const District: string;
                export const DistrictDistict: string;
                export const DistrictPlant: string;
                export const DistrictRemarks: string;
                export const Expense: string;
                export const ExpenseId: string;
                export const Plant: string;
                export const Plant1: string;
                export const PlantRemarks: string;
                export const Remarks: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace FinancialYear {
                export const EndDate: string;
                export const Id: string;
                export const Name: string;
                export const NameOfInvoice: string;
                export const Remarks: string;
                export const StartDate: string;
            }

            namespace Genre {
                export const GenreId: string;
                export const Name: string;
            }

            namespace ItemMaster {
                export const Id: string;
                export const ItemName: string;
                export const Remarks: string;
            }

            namespace LoadingTrip {
                export const Branch: string;
                export const BranchId: string;
                export const CreatedDate: string;
                export const Customer: string;
                export const CustomerId: string;
                export const Destination: string;
                export const DestinationId: string;
                export const District: string;
                export const DistrictId: string;
                export const ExpenseAmount: string;
                export const ItemId: string;
                export const ItemName: string;
                export const LoadingTripId: string;
                export const Plant: string;
                export const PlantId: string;
                export const Remarks: string;
                export const State: string;
                export const StateId: string;
                export const TripDate: string;
                export const TripNo: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const Weight: string;
                export const Wheels: string;
            }

            namespace Movie {
                export const Actors: string;
                export const CastList: string;
                export const Description: string;
                export const GalleryImages: string;
                export const GenreList: string;
                export const Kind: string;
                export const MovieId: string;
                export const PrimaryImage: string;
                export const ReleaseDate: string;
                export const Runtime: string;
                export const Storyline: string;
                export const Title: string;
                export const Year: string;
            }

            namespace MovieCast {
                export const Character: string;
                export const MovieCastId: string;
                export const MovieDescription: string;
                export const MovieId: string;
                export const MovieKind: string;
                export const MovieReleaseDate: string;
                export const MovieRuntime: string;
                export const MovieStoryline: string;
                export const MovieTitle: string;
                export const MovieYear: string;
                export const PersonBirthDate: string;
                export const PersonBirthPlace: string;
                export const PersonFirstName: string;
                export const PersonFullName: string;
                export const PersonGender: string;
                export const PersonHeight: string;
                export const PersonId: string;
                export const PersonLastName: string;
            }

            namespace MovieGenres {
                export const GenreId: string;
                export const GenreName: string;
                export const MovieDescription: string;
                export const MovieGenreId: string;
                export const MovieId: string;
                export const MovieKind: string;
                export const MovieReleaseDate: string;
                export const MovieRuntime: string;
                export const MovieStoryline: string;
                export const MovieTitle: string;
                export const MovieYear: string;
            }

            namespace Person {
                export const BirthDate: string;
                export const BirthPlace: string;
                export const FirstName: string;
                export const FullName: string;
                export const GalleryImages: string;
                export const Gender: string;
                export const Height: string;
                export const LastName: string;
                export const PersonId: string;
                export const PrimaryImage: string;
            }

            namespace Plant {
                export const Id: string;
                export const Plant: string;
                export const Remarks: string;
            }

            namespace StateMaster {
                export const Id: string;
                export const Remarks: string;
                export const State: string;
                export const StateCode: string;
            }

            namespace VehicleMaster {
                export const Brand: string;
                export const ChassisNumber: string;
                export const Color: string;
                export const CreatedDate: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const EngineNumber: string;
                export const FuelType: string;
                export const InsuranceExpiryDate: string;
                export const IsActive: string;
                export const ManufacturingYear: string;
                export const Model: string;
                export const SeatingCapacity: string;
                export const VehicleId: string;
                export const VehicleNumber: string;
                export const VehicleType: string;
                export const Wheels: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SereneMovieTutorial['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Default:{BranchMaster:{Address:1,BranchCode:1,BranchName:1,GstNo:1,Id:1,PanNo:1,PhoneNumber:1,PinCode:1,Remarks:1,State:1,State1:1,StateId:1,StateRemarks:1,StateStateCode:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerId:1,Fax:1,Phone:1,PostalCode:1,Region:1},CustomerMaster:{AddressLine1:1,AddressLine2:1,City:1,CreatedDate:1,CustomerCode:1,CustomerId:1,DateOfBirth:1,Email:1,FirstName:1,IdentityNumber:1,IdentityType:1,IsActive:1,LastName:1,MobileNumber:1,Pincode:1,State:1},Destination:{Destination:1,Distict:1,Distict1:1,DistictPlant:1,DistictRemarks:1,Id:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1},Distict:{Distict:1,Id:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1},Employees:{Address:1,BirthDate:1,City:1,Country:1,EmployeeId:1,Extension:1,FullName:1,HireDate:1,HomePhone:1,PostalCode:1,Region:1,Title:1,TitleOfCourtesy:1},Expense:{Destination:1,Destination1:1,DestinationDistict:1,DestinationPlant:1,DestinationRemarks:1,District:1,DistrictDistict:1,DistrictPlant:1,DistrictRemarks:1,Expense:1,ExpenseId:1,Plant:1,Plant1:1,PlantRemarks:1,Remarks:1,Weight:1,Wheels:1},FinancialYear:{EndDate:1,Id:1,Name:1,NameOfInvoice:1,Remarks:1,StartDate:1},Genre:{GenreId:1,Name:1},ItemMaster:{Id:1,ItemName:1,Remarks:1},LoadingTrip:{Branch:1,BranchId:1,CreatedDate:1,Customer:1,CustomerId:1,Destination:1,DestinationId:1,District:1,DistrictId:1,ExpenseAmount:1,ItemId:1,ItemName:1,LoadingTripId:1,Plant:1,PlantId:1,Remarks:1,State:1,StateId:1,TripDate:1,TripNo:1,VehicleId:1,VehicleNumber:1,Weight:1,Wheels:1},Movie:{Actors:1,CastList:1,Description:1,GalleryImages:1,GenreList:1,Kind:1,MovieId:1,PrimaryImage:1,ReleaseDate:1,Runtime:1,Storyline:1,Title:1,Year:1},MovieCast:{Character:1,MovieCastId:1,MovieDescription:1,MovieId:1,MovieKind:1,MovieReleaseDate:1,MovieRuntime:1,MovieStoryline:1,MovieTitle:1,MovieYear:1,PersonBirthDate:1,PersonBirthPlace:1,PersonFirstName:1,PersonFullName:1,PersonGender:1,PersonHeight:1,PersonId:1,PersonLastName:1},MovieGenres:{GenreId:1,GenreName:1,MovieDescription:1,MovieGenreId:1,MovieId:1,MovieKind:1,MovieReleaseDate:1,MovieRuntime:1,MovieStoryline:1,MovieTitle:1,MovieYear:1},Person:{BirthDate:1,BirthPlace:1,FirstName:1,FullName:1,GalleryImages:1,Gender:1,Height:1,LastName:1,PersonId:1,PrimaryImage:1},Plant:{Id:1,Plant:1,Remarks:1},StateMaster:{Id:1,Remarks:1,State:1,StateCode:1},VehicleMaster:{Brand:1,ChassisNumber:1,Color:1,CreatedDate:1,CustomerId:1,CustomerName:1,EngineNumber:1,FuelType:1,InsuranceExpiryDate:1,IsActive:1,ManufacturingYear:1,Model:1,SeatingCapacity:1,VehicleId:1,VehicleNumber:1,VehicleType:1,Wheels:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

