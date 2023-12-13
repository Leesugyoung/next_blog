"use client";

import { useParams, useRouter } from "next/navigation";

export function Contorl() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <ul>
      <li>
        <a href="/create">Create</a>
      </li>
      {id ? (
        <>
          <li>
            <a href={"/update/" + id}>Update</a>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "delete" };
                fetch(
                  `${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`,
                  options
                )
                  .then(resp => resp.json())
                  .then(result => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
