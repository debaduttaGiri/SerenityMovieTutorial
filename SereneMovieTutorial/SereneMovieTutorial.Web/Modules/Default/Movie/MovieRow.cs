
namespace SereneMovieTutorial.Default.Entities
{
    using SereneMovieTutorial.Modules.Default.Movie;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Movie]")]
    [DisplayName("Movies"), InstanceName("Movie")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MovieRow : Row, IIdRow, INameRow
    {
        const string jGenre = nameof(jGenre);

        [DisplayName("Movie Id"), Identity]
        [SortOrder(1, descending: true)]
        public Int32? MovieId
        {
            get { return Fields.MovieId[this]; }
            set { Fields.MovieId[this] = value; }
        }

        [DisplayName("Title"), Size(200), NotNull, QuickSearch(SearchType.StartsWith)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }
        [DisplayName("Actors"), Expression("(SELECT STRING_AGG(p.FirstName+p.LastName, ', ') FROM MovieCast mc  JOIN Person p ON p.PersonId = mc.PersonId WHERE mc.MovieId = T0.[MovieId])")]
        public String Actors
        {
            get { return Fields.Actors[this]; }
            set { Fields.Actors[this] = value; }
        }

        [DisplayName("Description"), Size(1000), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Storyline"), QuickSearch]
        public String Storyline
        {
            get { return Fields.Storyline[this]; }
            set { Fields.Storyline[this] = value; }
        }

        [DisplayName("Year"), QuickSearch(SearchType.Equals, numericOnly: 1)]
        public Int32? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Release Date")]
        public DateTime? ReleaseDate
        {
            get { return Fields.ReleaseDate[this]; }
            set { Fields.ReleaseDate[this] = value; }
        }

        [DisplayName("Runtime (mins)")]
        public Int32? Runtime
        {
            get { return Fields.Runtime[this]; }
            set { Fields.Runtime[this] = value; }
        }
        [EnumEditor]
        [DisplayName("Kind"), NotNull, DefaultValue(MovieKind.Film)]
        public Int32? Kind
        {
            get { return (Int32?)Fields.Kind[this]; }
            set => Fields.Kind[this] = (Int32?)value;
        }
        //[DisplayName("Genre"), ForeignKey(typeof(GenreRow)), LeftJoin(jGenre)]
        //[LookupEditor(typeof(GenreRow),InplaceAdd =true)]
        //public int? GenreId 
        //{ 
        //    get => Fields.GenreId[this]; 
        //    set => Fields.GenreId[this] = value; 
        //}
        //[DisplayName("Genre"), Expression(jGenre + ".Name")]
        //public string GenreName
        //{
        //    get { return Fields.GenreName[this]; }
        //    set { Fields.GenreName[this] = value; }
        //}

        //[DisplayName("Genres"), LookupEditor(typeof(GenreRow), Multiple = true), NotMapped]
        //[LinkingSetRelation(typeof(MovieGenresRow), nameof(MovieGenresRow.MovieId), nameof(MovieGenresRow.GenreId))]
        //public List<int> GenreList 
        //{ 
        //    get => Fields.GenreList[this]; 
        //    set => Fields.GenreList[this] = value; 
        //}
        [DisplayName("Genres")]
        [LookupEditor(typeof(GenreRow), Multiple = true)]
        [LinkingSetRelation(typeof(MovieGenresRow), nameof(MovieGenresRow.MovieId), nameof(MovieGenresRow.GenreId))]
        [NotMapped]
        public List<int> GenreList
        {
            get => Fields.GenreList[this];
            set => Fields.GenreList[this] = value;
        }
        //[MasterDetailRelation(foreignKey: nameof(MovieCastRow.MovieId), ColumnsType = typeof(MovieCastColumns))]
        [MasterDetailRelation(foreignKey: nameof(MovieCastRow.MovieId), IncludeColumns = "PersonFullName")]
        [DisplayName("Cast List"), NotMapped]
        public List<MovieCastRow> CastList
        {
            get { return Fields.CastList[this]; }
            set { Fields.CastList[this] = value; }
        }
        [DisplayName("Primary Image"), Size(100)]
        [FileUploadEditor(FilenameFormat = "Movie/PrimaryImage/~")]
        public string PrimaryImage { get => Fields.PrimaryImage[this]; set => Fields.PrimaryImage[this] = value; }
        [DisplayName("Gallery Images")]
        [MultipleImageUploadEditor(FilenameFormat = "Movie/GalleryImages/~")]
        public string GalleryImages { get => Fields.GalleryImages[this]; set => Fields.GalleryImages[this] = value; }


        IIdField IIdRow.IdField
        {
            get { return Fields.MovieId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }



        public static readonly RowFields Fields = new RowFields().Init();

        public MovieRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MovieId;
            public StringField Title;
            public StringField Actors;
            public StringField Description;
            public StringField Storyline;
            public Int32Field Year;
            public DateTimeField ReleaseDate;
            public Int32Field Runtime;
            public Int32Field Kind;
            //public  Int32Field GenreId;
            //public  StringField GenreName;
            public ListField<int> GenreList;
            public RowListField<MovieCastRow> CastList;
            public StringField PrimaryImage;
            public StringField GalleryImages;

        }
    }
}
