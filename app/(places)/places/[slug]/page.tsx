import LayoutChangeAnimation from "components/components/ui/animations/LayoutChangeAnimation";
import PlaceCard from "components/components/ui/cards/PlaceCard";
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

      <div className="flex flex-col py-3 px-5">
        <div className="flex justify-between items-center">
          <Link
            className="flex items-center gap-2 text-zinc-400"
            href={place?.onGoogleMaps || "/"}
          >
            <HiLocationMarker />
            see on map
          </Link>
        </div>

        <div className="text-2xl mt-3 font-bold">{place?.name}</div>
        <div className="mt-4 text-zinc-400">{place?.description}</div>

        <div className="text-xl mt-6 font-bold">places</div>
        <div className="mt-3 flex flex-col gap-3">
          {place?.places.map((place) => (
            <PlaceCard
              image={place.coverImage}
              link={`/places/${place.slug}/`}
              name={place.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
