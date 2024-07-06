import { APIURL } from "@/app/(home)/page";
import Link from "next/link";

export async function getMovies(id: String) {
  // throw new Error("야 오류남");
  return await fetch(`${APIURL}/${id}`).then(res => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  return (
    <div>
      <img src={movie.poster_path} alt="poster" width={300} height={300} />
      <div>
        <h2>{movie.title}</h2>
        <h3>🟡 {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Link href={movie.homepage} target="_blank">
          Homepage &rarr;
        </Link>
      </div>
    </div>
  );
}
