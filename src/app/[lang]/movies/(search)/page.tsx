import SearchResults from "./(components)/SearchResults";

const MoviesPage = ({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams: {
    sort_by: string;
    "release_date.gte": string;
    "release_date.lte": string;
  };
}) => {
  return <SearchResults lang={lang} searchParams={searchParams} />;
};

export default MoviesPage;
