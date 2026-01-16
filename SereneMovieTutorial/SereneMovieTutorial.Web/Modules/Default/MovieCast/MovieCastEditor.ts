/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SereneMovieTutorial.Default {
    @Serenity.Decorators.registerEditor()
    export class MovieCastEditor
        extends Common.GridEditorBase<MovieCastRow> {

        protected getColumnsKey() {
            return "Default.MovieCast";
        }

        protected getLocalTextPrefix() {
            return MovieCastRow.localTextPrefix;
        }
        //protected getDilogType() {
        //    return MovieCastEditorDialog;
        //}
        protected getDialogType() { return MovieCastEditDialog; }


        constructor(container: JQuery) {
            super(container);
        }
        protected validateEntity(row: MovieCastRow, id: number): boolean
        {
            const person = PersonRow.getLookup().itemById[row.PersonId];
            if (person) { row.PersonFullName = person.FullName; }
            if (this.view.getItems().some(x => x.PersonId === row.PersonId && x !== row))
            {
                Q.alert("This person is already in the cast!"); return false;
            }
            return true;
        }
        protected getAddButtonCaption() {
            return "Add";
        }
    }
}

