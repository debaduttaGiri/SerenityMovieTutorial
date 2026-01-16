namespace SereneMovieTutorial.Modules.Default.Movie {
    export enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
    Serenity.Decorators.registerEnumType(MovieKind, 'SereneMovieTutorial.Modules.Default.Movie.MovieKind', 'MovieDB.MovieKind');
}

