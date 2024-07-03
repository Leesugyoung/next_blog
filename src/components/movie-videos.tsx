import { APIURL } from "@/app/(home)/page";

async function getVideos(id: String) {
  return await fetch(`${APIURL}/${id}/videos`).then(res => res.json());
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
