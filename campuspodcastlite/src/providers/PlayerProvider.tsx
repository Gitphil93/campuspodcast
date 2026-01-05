import React, { createContext, useContext, useRef, useState } from "react";

export type Episode = {
  id: string;
  title: string;
  name: string;
  audioUrl: string;
  img: string;
};

type PlayerCtx = {
  current?: Episode;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  play: (ep: Episode) => void;
  toggle: () => void;
  seek: (time: number) => void;
  setVolume: (v: number) => void;
  volume: number;
  audioRef: React.RefObject<HTMLAudioElement>;
};

const Ctx = createContext<PlayerCtx | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [current, setCurrent] = useState<Episode | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(0.5); 

  const setVolume = (v: number) => {
    const clamped = Math.min(1, Math.max(0, v));
    const a = audioRef.current;
    if (!a) return;

    a.volume = clamped;
    setVolumeState(clamped);
  };

  const play = (ep: Episode) => {
    setCurrent(ep);
    setIsPlaying(true);
    setCurrentTime(0);
    setDuration(0);

    queueMicrotask(() => {
      const a = audioRef.current;
      if (!a) return;

      a.src = ep.audioUrl;
      a.volume = volume; 
      a.load();

      a.play().catch(() => setIsPlaying(false));
    });
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;

    if (a.paused) {
      a.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setIsPlaying(false);
    }
  };

  const seek = (time: number) => {
    const a = audioRef.current;
    if (!a) return;

    a.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <Ctx.Provider
      value={{
        current,
        isPlaying,
        duration,
        currentTime,
        play,
        toggle,
        seek,
        audioRef,
        setVolume,
        volume
      }}
    >
      {children}

      <audio
        ref={audioRef}
        preload="metadata"
        onLoadedMetadata={(e) => {
          e.currentTarget.volume = volume;
          const d = e.currentTarget.duration;
          setDuration(Number.isFinite(d) ? d : 0);
        }}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </Ctx.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
