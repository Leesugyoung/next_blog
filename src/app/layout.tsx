import { Contorl } from "./Contorl";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Leesu Blog",
  description: "Leesu's Bloog with Next.js",
};

export interface Topic {
  id: number;
  title: string;
  body: string;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, {
    cache: "no-store",
  });
  const topics: Topic[] = await resp.json();

  return (
    <html>
      <body>
        <h1>
          <a href="/">WEB</a>
        </h1>
        <ol>
          {topics.map(topic => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Contorl />
      </body>
    </html>
  );
}
