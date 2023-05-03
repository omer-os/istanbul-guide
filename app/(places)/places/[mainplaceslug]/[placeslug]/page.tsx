import PlaceCard from "components/components/ui/cards/PlaceCard";
import { sanityClient } from "components/lib/SanityClient";
import { groq } from "next-sanity";
import React from "react";

interface Props {
  params: {
    placeslug: string;
    mainplaceslug: string;
  };
}

// export async function generateStaticParams() {
//   const query = groq`
//   *[  _type == "place" && slug.current == "istiklal-avenue"] {
//     slug {
//       current
//     }
//   }
//   `;
//   const places2 = await sanityClient.fetch(query);

//   return places2.map(
//     (place: {
//       slug: {
//         current: string;
//       };
//     }) => ({
//       mainplaceslug: place.slug.current,
//     })
//   );
// }

type Place = {
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
};

export default async function page(props: Props) {
  const query = groq`
  *[_type == "place" && slug.current == "${props.params.placeslug}"] {
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
  }[0]
  `;
  const places2: Place = await sanityClient.fetch(query);

  return (
    <div className="animate-in fade-in">
      <div className="h-[35vh] w-full">
        <img
          src={places2.coverImage.asset.url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold capitalize">{places2.name}</h1>

        <div className="mt-4 text-zinc-400">{places2.description}</div>

        <div className="mt-3 flex flex-col gap-3">
          {places2.images?.map((image) => (
            <PlaceCard key={image.asset.url} image={image.asset.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
