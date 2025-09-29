import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export async function GET(NextRequest) {
  const currentPage = await (NextRequest.nextUrl.searchParams.get("page")
    ? NextRequest.nextUrl.searchParams.get("page")
    : 1);
  try {
    const request = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          Accept: "application/json",
        },
        params: {
          page: Math.floor(Math.random() * 80),
        },
      },
    );
    const response = await request.data;
    return NextResponse.json({ status: "success", data: response });
  } catch (error) {
    return NextResponse.json({ status: "fail", message: error });
  }
}
