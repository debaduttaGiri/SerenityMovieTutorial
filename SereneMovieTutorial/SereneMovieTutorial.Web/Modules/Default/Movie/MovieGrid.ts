
namespace SereneMovieTutorial.Default {

    @Serenity.Decorators.registerClass()
    export class MovieGrid extends Serenity.EntityGrid<MovieRow, any> {
        protected getColumnsKey() { return 'Default.Movie'; }
        protected getDialogType() { return MovieDialog; }
        protected getIdProperty() { return MovieRow.idProperty; }
        protected getInsertPermission() { return MovieRow.insertPermission; }
        protected getLocalTextPrefix() { return MovieRow.localTextPrefix; }
        protected getService() { return MovieService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getQuickSearchFields():Serenity.QuickSearchField[] {
            const txt = s => Q.text(`Db.${MovieRow.localTextPrefix}.${s}`);
            //const fld = MovieRow.Fields;
            return [
                { name: "", title: "All" },
                { name: MovieRow.Fields.Description, title: txt(MovieRow.Fields.Description) },
                { name: MovieRow.Fields.Storyline, title: txt(MovieRow.Fields.Storyline) },
                { name: MovieRow.Fields.Year, title: txt(MovieRow.Fields.Year) }
            ];
        }
    }
}