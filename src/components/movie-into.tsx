import { APIURL } from "@/app/(home)/page";

async function getMovies(id: String) {
  return await fetch(`${APIURL}/${id}`).then(res => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovies(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
