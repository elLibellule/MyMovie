export const getMovie = async (
  path: string,
  params: { key: string; value?: string | null }[] = [],
  language: string = "fr-FR"
) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("language", language);
  url.searchParams.append("page", "1");
  params
    .filter((param) => param.value)
    .forEach((param: any) => {
      url.searchParams.append(param.key, param.value);
    });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.TMDB_API_KEY}`,
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
