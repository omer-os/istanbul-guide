import { NextApiRequest, NextApiResponse } from "next";
import { DB_places } from "components/lib/db";

type Place = {
  name: string;
  description: string;
  image: string;
  slug: string;
  images: string[];
  onGoogleMaps: string;
};

export function getMainLocations(): Place[] {
  return DB_places.map((place) => ({
    name: place.name,
    description: place.description,
    image: place.image,
    slug: place.slug,
    images: place.images,
    onGoogleMaps: place.onGoogleMaps,
  }));
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return DB_places.find((place) => place.slug === slug);
}

export default function places(req: NextApiRequest, res: NextApiResponse) {
  const { get } = req.query;
  if (get === "all") {
    res.status(200).json(DB_places);
  } else if (get === "mainlocations") {
    const mainLocations = getMainLocations();
    res.status(200).json(mainLocations);
  } else {
    const place = getPlaceBySlug(get as string);
    if (place) {
      res.status(200).json(place);
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  }
}
