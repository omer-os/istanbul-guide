import PlaceCard from "components/components/ui/cards/PlaceCard";
import Imagecarousel from "components/components/ui/imagecarousels/imagecarousel";
import { sanityClient } from "components/lib/SanityClient";
// import { getMainLocations, getPlaceBySlug } from "components/pages/api/places";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export async function generateStaticParams() {

  const query = groq`
    *[_type=="location"]{
      slug{current}
    }
  `;
  const places2 = await sanityClient.fetch(query);

  return places2.map(
    (place: {
      slug: {
        current: string;
      };
    }) => ({
      mainplaceslug: place.slug.current,
    })
  );
}

type SanityLocationResult = {
  images: {
    asset: {
      url: string;
    };
  }[];
  places: {
    name: string;
    description: string;
    slug: {
      current: string;
    };
    onGoogleMaps: string;
    coverImage: {
      asset: {
        url: string;
      };
    };
    images: {
      asset: {
        url: string;
      };
    }[];
  }[];
  name: string;
  description: string;
  slug: {
    current: string;
  };
  coverImage: {
    asset: {
      url: string;
    };
  };
  onGoogleMaps: string;
};

export default async function page({
  params,
}: {
  params: {
    mainplaceslug: string;
  };
}) {

  const query = groq`*[_type=="location" && slug.current=="${params.mainplaceslug}"]{
    name,
    description,
    slug{
      current
    },
    onGoogleMaps,
    coverImage{
      asset->{
        url
      }
    },
    images[]{
      asset->{
        url
      }
    },
    "places": *[_type == "place" && references(^._id)]{
      name,
      description,
      slug{
        current
      },
      onGoogleMaps,
      coverImage{
        asset->{
          url
        }
      },
      images[]{
        asset->{
          url
        }
      }
    }

  }[0]  
  `;

  const place: SanityLocationResult = await sanityClient.fetch(query);

  return (
    <div>
      <div className="img h-[40vh] animate-in fade-in">
        <Imagecarousel
          className="w-full overflow-hidden rounded-b-2xl h-full"
          images={place?.images.map((i) => i.asset.url)}
        />
      </div>

      <div className="flex flex-col py-3 px-5 animate-in slide-in-from-bottom-20 duration-500 fade-in">
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
          {place?.places.map((place, index) => (
            <PlaceCard
              key={place.slug.current + index}
              image={place.coverImage.asset.url}
              link={`/places/${place.slug.current}/${place.slug.current}`}
              name={place.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
