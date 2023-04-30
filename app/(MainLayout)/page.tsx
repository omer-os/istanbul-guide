import PlaceCard from "components/components/ui/cards/PlaceCard";
import { getMainLocations } from "components/pages/api/places";

export default async function page() {
  const places = getMainLocations();

  return (
    <div className="px-5 py-3">
      <div className="text-3xl font-bold">Istanbul Guide</div>
      <div className="text-zinc-400">Welcome to Istanbul</div>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div className="font-bold">places</div>
          <div className="text-zinc-400">See all</div>
        </div>

        <div className="flex flex-col mt-6 gap-4">
          {places.map((i, index) => (
            <PlaceCard
              key={index}
              name={i.name}
              description={i.description}
              image={i.image}
              link={"/places/" + i.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
