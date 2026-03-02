namespace SereneMovieTutorial.Administration {

    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    export class CustomPermissionEditor extends Serenity.DataGrid<PermissionItem, PermissionEditorOptions> {

        protected getIdProperty() { return "Key"; }

        private _rolePermissions: Q.Dictionary<boolean> = {};
        private hasActionMap: Q.Dictionary<boolean> = {};
        private byParentKey: Q.Grouping<PermissionItem>;

        constructor(container: JQuery, opt: PermissionEditorOptions) {
            super(container, opt);
            

            let titleByKey: Q.Dictionary<string> = {};
            let permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);

            let items = permissionKeys.map(key => <PermissionItem>{
                Key: key,
                ParentKey: this.getParentKey(key),
                Title: titleByKey[key],
                IsGroup: key.charAt(key.length - 1) === ':',
                HasActions: this.hasActionMap[key] === true,
                Insert: false,
                Read: false,
                Modify: false,
                Delete: false,
                Grant: false
            });

            this.byParentKey = Q.toGrouping(items, x => x.ParentKey);
            this.setItems(items);
        }

        protected getColumns(): Slick.Column[] {
            return [

                {
                    name: "Permission",
                    field: "Title",
                    format: ctx => {

                        let key = ctx.item.Key;

                        let inherited =
                            this._rolePermissions[key] ||
                            this._rolePermissions[key + ":Insert"] ||
                            this._rolePermissions[key + ":Read"] ||
                            this._rolePermissions[key + ":Modify"] ||
                            this._rolePermissions[key + ":Delete"];

                        let icon = inherited
                            ? "<i class='fa fa-check text-success'></i> "
                            : "<i class='fa fa-ban text-danger'></i> ";

                        return icon + Q.htmlEncode(ctx.value);
                    },
                    width: 550
                },

                {
                    name: "Grant",
                    field: "Grant",
                    format: ctx => {
                        if (ctx.item.IsGroup) return "";
                        return `<span class='check-box grant ${ctx.item.Grant ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Insert",
                    field: "Insert",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box insert ${ctx.item.Insert ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Read",
                    field: "Read",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box read ${ctx.item.Read ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Update",
                    field: "Modify",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box modify ${ctx.item.Modify ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                },

                {
                    name: "Delete",
                    field: "Delete",
                    format: ctx => {
                        if (ctx.item.IsGroup || !ctx.item.HasActions) return "";
                        return `<span class='check-box delete ${ctx.item.Delete ? "checked" : ""}'></span>`;
                    },
                    width: 70,
                    cssClass: "align-center"
                }
            ];
        }

        protected onClick(e, row, cell): void {

            super.onClick(e, row, cell);

            let target = $(e.target);
            let item = this.itemAt(row);

            if (!item || item.IsGroup)
                return;

            let field: string = null;

            if (target.hasClass("grant")) field = "Grant";
            else if (target.hasClass("insert")) field = "Insert";
            else if (target.hasClass("read")) field = "Read";
            else if (target.hasClass("modify")) field = "Modify";
            else if (target.hasClass("delete")) field = "Delete";

            if (!field) return;

            e.preventDefault();

            let value = !item[field];
            item[field] = value;

           
            if (field === "Grant" && item.HasActions) {

                item.Insert = value;
                item.Read = value;
                item.Modify = value;
                item.Delete = value;
            }

            this.slickGrid.invalidate();
        }

        private getParentKey(key: string): string {
            if (key.charAt(key.length - 1) === ':')
                key = key.slice(0, -1);

            let idx = key.lastIndexOf(':');
            return idx >= 0 ? key.substring(0, idx + 1) : null;
        }

        private getSortedGroupAndPermissionKeys(titleByKey: Q.Dictionary<string>): string[] {

            let keys = <string[]>Q.getRemoteData('Administration.PermissionKeys').Entities;

            let entityKeys: Q.Dictionary<boolean> = {};
            let hasAction: Q.Dictionary<boolean> = {};

            for (let k of keys) {

                if (!k) continue;

                let parts = k.split(':');

                if (parts.length > 2) {
                    let baseKey = parts.slice(0, parts.length - 1).join(':');
                    entityKeys[baseKey] = true;
                    hasAction[baseKey] = true;
                }
                else {
                    entityKeys[k] = true;
                    if (!hasAction[k])
                        hasAction[k] = false;
                }
            }

            this.hasActionMap = hasAction;

            keys = Object.keys(entityKeys);

            for (let k of keys)
                titleByKey[k] = Q.coalesce(Q.tryGetText('Permission.' + k), k);

            return keys.sort((x, y) => Q.turkishLocaleCompare(titleByKey[x], titleByKey[y]));
        }

        get value(): UserPermissionRow[] {

            let result: UserPermissionRow[] = [];

            for (let item of this.view.getItems()) {

                if (item.IsGroup)
                    continue;

                if (item.Grant)
                    result.push({ PermissionKey: item.Key, Granted: true });

                if (item.HasActions) {

                    if (item.Insert)
                        result.push({ PermissionKey: item.Key + ":Insert", Granted: true });

                    if (item.Read)
                        result.push({ PermissionKey: item.Key + ":Read", Granted: true });

                    if (item.Modify)
                        result.push({ PermissionKey: item.Key + ":Modify", Granted: true });

                    if (item.Delete)
                        result.push({ PermissionKey: item.Key + ":Delete", Granted: true });
                }
            }

            return result;
        }

        set value(value: UserPermissionRow[]) {

            for (let item of this.view.getItems()) {
                item.Insert = item.Read = item.Modify = item.Delete = item.Grant = false;
            }

            if (!value) return;

            for (let row of value) {

                let parts = row.PermissionKey.split(':');

                if (parts.length > 2) {

                    let entityKey = parts.slice(0, parts.length - 1).join(':');
                    let action = parts[parts.length - 1].toLowerCase();
                    let item = this.view.getItemById(entityKey);

                    if (!item) continue;

                    switch (action) {
                        case "insert": item.Insert = true; break;
                        case "read": item.Read = true; break;
                        case "modify": item.Modify = true; break;
                        case "delete": item.Delete = true; break;
                    }
                }
                else {
                    let item = this.view.getItemById(row.PermissionKey);
                    if (item)
                        item.Grant = true;
                }
            }

            this.view.refresh();
            this.slickGrid.invalidate();
        }

        set rolePermissions(value: string[]) {

            this._rolePermissions = {};

            if (!value) return;

            for (let key of value)
                this._rolePermissions[key] = true;

            this.view.refresh();
            this.slickGrid.invalidate();
        }
       
    }

    export interface PermissionItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        HasActions?: boolean;
        Insert?: boolean;
        Read?: boolean;
        Modify?: boolean;
        Delete?: boolean;
        Grant?: boolean;
    }

    export interface PermissionEditorOptions {
        showRevoke?: boolean;
    }
}