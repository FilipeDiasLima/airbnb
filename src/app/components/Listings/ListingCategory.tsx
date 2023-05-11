"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  descripton: string;
}

export function ListingCategory({
  descripton,
  icon: Icon,
  label,
}: ListingCategoryProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-neutral-500 font-light">{descripton}</div>
        </div>
      </div>
    </div>
  );
}
