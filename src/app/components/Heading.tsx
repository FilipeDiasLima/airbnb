"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: string;
}

export function Heading({ title, center, subtitle }: HeadingProps) {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
}