"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
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
          method: "post",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, options)
          .then(res => res.json())
          .then(result => {
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input name="title" type="text" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value="craete" />
      </p>
    </form>
  );
}
