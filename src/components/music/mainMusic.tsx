"use client";

import { useEffect, useState } from "react";

export default function MainMusic() {
  const [isPlay, setIsPlay] = useState(false);

  const srcSet = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1718386779&color=%23443c3a&auto_play=${isPlay}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <>
      <div
        className="mt-20 w-60 h-40 "
        dangerouslySetInnerHTML={{
          __html: `
        <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src=${srcSet}></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/yazminemb" title="Yazmine MB" target="_blank" style="color: #cccccc; text-decoration: none;">Yazmine MB</a> · <a href="https://soundcloud.com/yazminemb/interlude-yazmine-mb" title="INTERLUDE - Yazmine MB" target="_blank" style="color: #cccccc; text-decoration: none;">INTERLUDE - Yazmine MB</a></div>
          `,
        }}
      />
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsPlay(true)}
      >
        play
      </button>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsPlay(false)}
      >
        Stop
      </button>
    </>
  );
}
