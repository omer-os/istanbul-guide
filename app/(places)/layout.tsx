import PlacePageNav from "components/components/ui/nav/PlacePageNav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto">
      <PlacePageNav />
      {children}
    </div>
  );
}
