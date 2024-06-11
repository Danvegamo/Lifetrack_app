import { FaFire, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { TbPlant2 } from "react-icons/tb";
import { MdSportsKabaddi } from "react-icons/md";


export const categories = [
  {
    label: "Populares",
    icon: FaFire,
    description: "¡Encuentra las actividades más populares!",
  },
  {
    label: "Deportes",
    icon: MdSportsKabaddi,
    description: "¡Descubre actividades deportivas!",
  },
  {
    label: "En parche",
    icon: FaUsers,
    description: "¡Únete a actividades en grupo!",
  },
  {
    label: "Mental",
    icon: TbPlant2,
    description: "¡Encuentra actividades para tu bienestar mental!",
  },
  {
    label: "Cerca a mí",
    icon: FaMapMarkerAlt,
    description: "¡Explora actividades cerca de tu ubicación!",
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
