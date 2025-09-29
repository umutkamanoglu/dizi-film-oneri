import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const request = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        Accept: "application/json",
      },
    },
  );
  const response = await request.data;
  return NextResponse.json({ status: "ok", data: response });
}
