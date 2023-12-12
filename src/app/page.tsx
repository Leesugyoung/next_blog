import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Image
        width={150}
        height={150}
        alt="킹받는 고양이"
        src={"/다운로드.jpeg"}
      ></Image>
    </>
  );
}
