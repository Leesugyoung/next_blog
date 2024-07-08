import MainMusic from "@/components/music/mainMusic";
import MainVideo from "@/components/video/mianVideo";

export const metadata = {
  title: "Leesu Blog",
};

export default async function HomePage() {
  return (
    <div>
      <MainMusic />
      <div className="absolute bottom-custom-bottom left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
