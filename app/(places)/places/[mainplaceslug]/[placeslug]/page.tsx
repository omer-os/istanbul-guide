import React from "react";

interface Props {
  params: {
    placeslug: string;
    mainplaceslug: string;
  };
}

export default function page(props: Props) {
  return <div>
    <h1>Places</h1>
    <p>mainplaceslug: {props.params.mainplaceslug}</p>
    <p>placeslug: {props.params.placeslug}</p>
  </div>;
}
