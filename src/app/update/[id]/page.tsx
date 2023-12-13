"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Result } from "postcss";
import { useEffect, useState } from "react";

export default function Update() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const router = useRouter();
  const { id } = useParams();
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
      .then(resp => resp.json())
      .then(result => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = (
          e.currentTarget.elements.namedItem("title") as HTMLInputElement
        ).value;
        const body = (
          e.currentTarget.elements.namedItem("body") as HTMLInputElement
        ).value;

        const options = {
          method: "put",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`http://localhost:9999/topics/${id}`, options)
          .then(res => res.json())
          .then(result => {
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input
          name="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
