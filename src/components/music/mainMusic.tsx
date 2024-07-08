"use client";

import { useEffect, useState } from "react";

export default function MainMusic() {
  const [tick, setTick] = useState<HTMLAudioElement>();

  const metronomeSoundHandler = () => {
    tick && tick.play();
  };

  const stopSoundHandler = () => {
    tick && tick.pause();
    tick && (tick.currentTime = 0); // 재생 위치를 처음으로 되돌림
  };

  useEffect(() => {
    const audio = new Audio("/assets/video/sea.mp3");
    setTick(audio);
    audio.play(); // 사이트에 접속하면 자동 재생
  }, []);

  return (
    <>
      <button onClick={metronomeSoundHandler}>Play</button>
      <button onClick={stopSoundHandler}>Stop</button>
      <div
        className="mt-20"
        dangerouslySetInnerHTML={{
          __html: `
        <iframe width="1020" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1718386779&color=%23443c3a&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/yazminemb" title="Yazmine MB" target="_blank" style="color: #cccccc; text-decoration: none;">Yazmine MB</a> · <a href="https://soundcloud.com/yazminemb/interlude-yazmine-mb" title="INTERLUDE - Yazmine MB" target="_blank" style="color: #cccccc; text-decoration: none;">INTERLUDE - Yazmine MB</a></div>
          `,
        }}
      />
    </>
  );
}
