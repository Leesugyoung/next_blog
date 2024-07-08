import Image from "next/image";

export default function MainVideo() {
  return (
    <div className="relative overflow-hidden h-100 md:h-100 lg:h-148">
      <video width="10000" muted controls={false} autoPlay loop>
        <source src="/assets/video/sea.mp4" type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다 :(
      </video>
      {/* <Image
        src="/assets/image/image.png"
        width={1020}
        height={300}
        alt="sea"
      /> */}
    </div>
  );
}
