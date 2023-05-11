"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/types";
import { Heading } from "../Heading";
import Image from "next/image";
import { HeartButton } from "../HeartButton";

interface ListingHeaderProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser: SafeUser | null;
}

export function ListingHeader({
  currentUser,
  id,
  imageSrc,
  locationValue,
  title,
}: ListingHeaderProps) {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
