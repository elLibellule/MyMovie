import { getMovie } from "@/utils/getMovie";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const lang = searchParams.get("lang");
  const searchResults = await getMovie(
    `/search/movie`,
    [{ key: "query", value: query }],
    lang?.toString()
  );

  return new Response(JSON.stringify(searchResults), { status: 200 });
}
