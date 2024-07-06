"use client";

import { IMovie } from "@/app/(home)/page";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Movie({ title, id, poster_path }: IMovie) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id}>
      <img
        style={{ cursor: "pointer" }}
        src={poster_path}
        alt="movie_poster"
        width={200}
        height={300}
        onClick={onClick}
      />
      <Link prefetch href={`/movies/${id}`}>
        <p className="font-semibold ...">{title}</p>
      </Link>
    </div>
  );
}
