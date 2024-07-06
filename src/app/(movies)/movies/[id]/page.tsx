import { APIURL } from "@/app/(home)/page";
import MovieInfo, { getMovies } from "@/components/movie-into";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

// 동적 메타데이터 설정, export 필수
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
