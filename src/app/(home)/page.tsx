import Movie from "@/components/movie";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const APIURL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
}

export async function getMovies() {
  // await new Promise(res => setTimeout(res, 10000));
  // Next.js는 기본 웹 fetch() API를 확장하여 서버의 각 요청이 자체 영구 캐싱 의미를 설정할 수 있도록 한다.
  return await fetch(APIURL).then(res => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-4 gap-4">
      {movies?.map((i: IMovie) => (
        <Movie
          key={i.id}
          id={i.id}
          poster_path={i.poster_path}
          title={i.title}
        />
      ))}
    </div>
  );
}
