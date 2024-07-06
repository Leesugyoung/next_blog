import { APIURL } from "@/app/(home)/page";

interface IMovieVideos {
  id: string;
  name: string;
  key: string;
}

async function getVideos(id: String) {
  return await fetch(`${APIURL}/${id}/videos`).then(res => res.json());
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      {videos.map((i: IMovieVideos) => (
        <iframe
          key={i.id}
          src={`https://youtube.com/embed/${i.key}`}
          title={i.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
