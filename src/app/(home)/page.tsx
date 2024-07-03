import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const APIURL = "https://nomad-movies.nomadcoders.workers.dev/movies";

interface IMovie {
  id: number;
  title: string;
  // 다른 속성들도 여기에 추가할 수 있습니다.
}

async function getMovies() {
  // await new Promise(res => setTimeout(res, 10000));
  // Next.js는 기본 웹 fetch() API를 확장하여 서버의 각 요청이 자체 영구 캐싱 의미를 설정할 수 있도록 한다.
  return await fetch(APIURL).then(res => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="m-5">
      {movies?.map((i: IMovie) => (
        <li key={i.id}>
          <Link href={`/movies/${i.id}`}>{i.title}</Link>
        </li>
      ))}
    </div>
  );
}
