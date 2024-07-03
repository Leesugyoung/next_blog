import { APIURL } from "@/app/(home)/page";
import MovieInfo from "@/components/movie-into";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
