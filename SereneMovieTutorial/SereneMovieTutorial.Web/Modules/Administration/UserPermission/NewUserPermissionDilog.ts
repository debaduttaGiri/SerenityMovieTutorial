namespace SereneMovieTutorial.Administration {

    @Serenity.Decorators.registerClass()
    export class NewUserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private userId: number;
        private username: string;

        private permissions: CustomPermissionEditor;

        constructor(opt: UserPermissionDialogOptions) {
            super(opt);
            this.userId = opt.userID;
            this.username = opt.username;
            this.permissions = new CustomPermissionEditor(this.byId('Permissions'), {
                showRevoke: true
            });
           
            UserPermissionService.List({
                UserID: this.userId,
                Module: null,
                Submodule: null
            }, response => {
                this.permissions.value = response.Entities;
            });

            UserPermissionService.ListRolePermissions({
                UserID: this.userId,
                Module: null,
                Submodule: null,
            }, response => {
                this.permissions.rolePermissions = response.Entities;
                
            });

            //this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
        }

        protected getDialogOptions(): JQueryUI.DialogOptions {
            let opt = super.getDialogOptions();

            opt.buttons = [
                {
                    text: Q.text('Dialogs.OkButton'),
                    click: e => {
                        UserPermissionService.Update({
                            UserID: this.userId,
                            Permissions: this.permissions.value,
                            Module: null,
                            Submodule: null
                        }, response => {
                            this.dialogClose();
                            window.setTimeout(() => Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')), 0);
                        });
                    }
                }, {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }];

            opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'),
                this.username);

            return opt;
        }

        protected getTemplate(): string {
            return '<div id="~_Permissions" class="grid"></div>';
        }

        protected onDialogOpen(): void {
            super.onDialogOpen();

            setTimeout(() => {
                this.permissions.element.triggerHandler('layout');
                this.permissions.slickGrid.resizeCanvas();
            }, 0);
        }
        
        
    }

    export interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}