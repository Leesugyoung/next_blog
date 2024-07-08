import MainTop from "@/components/mainTop/mainTop";
import MainMusic from "@/components/music/mainMusic";
import MainVideo from "@/components/video/mianVideo";

export const metadata = {
  title: "Leesu Blog",
};

export default async function HomePage() {
  return (
    <div>
      {/* 페이지의 상단부분 */}
      <MainTop />
    </div>
  );
}
