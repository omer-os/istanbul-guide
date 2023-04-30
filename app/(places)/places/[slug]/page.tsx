import { getPlaceBySlug } from "components/pages/api/places";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const place = getPlaceBySlug(params.slug);

  return (
    <div>
      <div className="img h-[40vh]">
        <img
          src={place?.image}
          className="w-full rounded-b-2xl h-full object-cover brightness-75"
          alt={place?.name}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center py-3 px-5">
          <Link
            className="flex items-center gap-2 text-zinc-400"
            href={place?.onGoogleMaps || "/"}
          >
            <HiLocationMarker />
            see on map
          </Link>
        </div>
      </div>
    </div>
  );
}
