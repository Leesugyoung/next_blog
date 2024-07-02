export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise(res => setTimeout(res, 10000));
  // Next.js는 기본 웹 fetch() API를 확장하여 서버의 각 요청이 자체 영구 캐싱 의미를 설정할 수 있도록 한다.
  return await fetch(URL).then(res => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{JSON.stringify(movies)}</h1>
    </div>
  );
}
