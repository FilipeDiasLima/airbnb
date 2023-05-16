"use client";

import { Container } from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { BsSnow } from "react-icons/bs";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiDesert,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { CategoryBox } from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Praia",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Moinhos",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "No interior",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Piscinas",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Ilhas",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castelo",
    icon: GiCastle,
    description: "This property is in a castle!",
  },
  {
    label: "Acampamento",
    icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Frio",
    icon: BsSnow,
    description: "This property is in the arctic!",
  },
  {
    label: "Caverna",
    icon: GiCaveEntrance,
    description: "This property is in a cave!",
  },
  {
    label: "Deserto",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Celeiros",
    icon: GiBarn,
    description: "This property is in the barn!",
  },
  {
    label: "Luxo",
    icon: IoDiamond,
    description: "This property is luxurious!",
  },
];

export function Categories() {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
