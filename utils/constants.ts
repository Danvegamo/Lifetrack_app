import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import { FaRunning, FaSpa, FaDumbbell, FaMountain, FaLeaf } from "react-icons/fa";
import { GiMeditation, GiFruitBowl, GiCycling } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineSportsHandball, MdOutlineLocalGroceryStore } from "react-icons/md";

export const categories = [
  {
    label: "Actividades Físicas",
    icon: FaRunning,
    description: "¡Descubre actividades físicas para mantenerte en forma!",
  },
  {
    label: "Meditación",
    icon: GiMeditation,
    description: "¡Encuentra sesiones de meditación para tu bienestar mental!",
  },
  {
    label: "Ciclismo",
    icon: GiCycling,
    description: "¡Explora rutas y actividades de ciclismo!",
  },
  {
    label: "Gimnasio",
    icon: FaDumbbell,
    description: "¡Accede a los mejores gimnasios de la ciudad!",
  },
  {
    label: "Yoga",
    icon: GrYoga,
    description: "¡Participa en clases de yoga para relajarte y fortalecer tu cuerpo!",
  },
  {
    label: "Senderismo",
    icon: FaMountain,
    description: "¡Descubre rutas de senderismo en Bogotá!",
  },
  {
    label: "Nutrición",
    icon: GiFruitBowl,
    description: "¡Encuentra asesoramiento nutricional y dietas saludables!",
  },
  {
    label: "Deportes en Equipo",
    icon: MdOutlineSportsHandball,
    description: "¡Únete a actividades deportivas en equipo!",
  },
  {
    label: "Spa y Relajación",
    icon: FaSpa,
    description: "¡Disfruta de spas y actividades de relajación!",
  },
  {
    label: "Naturaleza",
    icon: FaLeaf,
    description: "¡Conéctate con la naturaleza en actividades al aire libre!",
  },
  {
    label: "Compras Saludables",
    icon: MdOutlineLocalGroceryStore,
    description: "¡Encuentra los mejores lugares para comprar productos saludables!",
  },
];

export const LISTINGS_BATCH = 16;

export const menuItems = [
  {
    label: "Mis actividades",
    path: "/trips",
  },
  {
    label: "Mis favoritos",
    path: "/favorites",
  },
  {
    label: "Mis reservas",
    path: "/reservations",
  },
  {
    label: "Mis propiedades",
    path: "/properties",
  },
];