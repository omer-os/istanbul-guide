import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name?: string;
  description?: string;
  image: string;
  link: string;
}

export default function PlaceCard(props: Props) {
  return (
    <Link
      href={props.link}
      className="relative h-[13em] w-full rounded-xl flex flex-col justify-end text-white p-4 overflow-hidden group"
    >
      <div className="img absolute w-full h-full top-0 left-0">
        <Image
          src={props.image}
          alt=""
          className="w-full brightness-75 h-full object-cover group-hover:brightness-50  object-center group-hover:scale-110 transition-all"
          fill
        />
      </div>

      <div className="flex flex-col relative z-10">
        <div className="text-2xl group-hover:shadow-md transition-all font-bold capitalize">
          {props.name}
        </div>

        <div className="text-white group-hover:shadow-md transition-all text-sm line-clamp-1">
          {props.description}
        </div>
      </div>
    </Link>
  );
}
