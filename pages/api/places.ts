import { NextApiRequest, NextApiResponse } from "next";
import { DB_places } from "components/lib/db";

export function getMainLocations() {
  return DB_places.map((place) => ({
    name: place.name,
    description: place.description,
    image: place.image,
    slug: place.slug,
    images: place.images,
    onGoogleMaps: place.onGoogleMaps,
  }));
}

export function getPlaceBySlug(slug: string) {
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
