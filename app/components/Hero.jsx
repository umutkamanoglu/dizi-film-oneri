"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TbLoader2, TbRefresh } from "react-icons/tb";

export default function Hero() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/api/movie/popular");
      const response =
        await request.data.data.results[
          Math.floor(Math.random() * request.data.data.results.length)
        ];
      console.log(response);
      setData(response);

      const genreRequest = await axios.get("/api/genre/movie/list");
      const genreResponse = await genreRequest.data;
      setGenres(genreResponse);
      console.log(genreResponse);

      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section
      className={`h-[calc(100vh-10rem)] w-screen relative text-white`}
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, black 100%), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <button
        className="bg-black p-2 px-5 rounded-full right-2 top-2 absolute cursor-pointer"
        onClick={async () => {
          const request = await axios.get("/api/movie/popular");
          const response =
            await request.data.data.results[
              Math.floor(Math.random() * request.data.data.results.length)
            ];
          console.log(response);
          setData(response);
          setLoading(false);
        }}
      >
        <TbRefresh size={24} color="#fff" />
      </button>

      <button className="bg-black p-2 px-5 rounded-full right-2 bottom-5 absolute cursor-pointer">
        See Movie Details
      </button>

      <span className="absolute bottom-5 left-5">
        <h2 className="font-bold text-5xl mb-5">{data?.title}</h2>
        <div className="text-sm flex flex-col">
          <span className="w-lg mb-10 text-base">{data.overview}</span>

          <div>
            <span className="mr-5">{data?.release_date.split("-")[0]}</span>

            <span>
              {data.genre_ids
                .slice(0, 2)
                .map(
                  (genreId, index) =>
                    genres.data.genres.filter((genre) => genre.id == genreId)[0]
                      .name + (index == 0 ? " - " : ""),
                )}
            </span>
          </div>
        </div>
      </span>
    </section>
  );
}

const Loading = () => {
  return (
    <section
      className={`h-[calc(100vh-10rem)] flex items-center justify-center`}
    >
      <TbLoader2 className="animate-spin" size={75} color="#7f7f7f" />
    </section>
  );
};
