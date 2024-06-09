"use client";
import React, { useMemo, useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Modal from "../modals/Modal";
import SearchModal from "../modals/SearchModal";
import Map from "../Map";
import sectorsData from "@/data/Sectors.json"; // Importa el archivo JSON con los sectores

const Search = () => {
  const searchParams = useSearchParams();
  const sector = searchParams?.get("sector");
  const [selectedSector, setSelectedSector] = useState(sector || "");
  const [sectors, setSectors] = useState<{ value: string; label: string; latlng: number[]; region: string; }[]>(sectorsData);

  useEffect(() => {
    // Carga los datos de los sectores desde el archivo JSON
    setSectors(sectorsData);
  }, []);

  const startDate = searchParams?.get("startDate");
  const endDate = searchParams?.get("endDate");

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Días`;
    }

    return "Cualquier semana";
  }, [endDate, startDate]);

  const handleSectorChange = (newSector: React.SetStateAction<string>) => {
    setSelectedSector(newSector);
  };

  return (
    <Modal>
      <Modal.Trigger name="search">
        <button
          type="button"
          className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
        >
          <div className="flex flex-row justify-between items-center">
            <small className="text-sm font-bold px-6 text-[#585858]">
              {selectedSector ? sectors.find(s => s.value === selectedSector)?.label : "Cualquier lugar"}
            </small>

            <small className="hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-1 text-center text-[#585858]">
              {durationLabel}
            </small>

            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-4">
              <div className="p-2 bg-blue-500 rounded-full text-white">
                <FaSearch className="text-[12px]" />
              </div>
            </div>
          </div>
        </button>
      </Modal.Trigger>
      <Modal.Window name="search">
        <>
         <SearchModal onSectorChange={handleSectorChange} sectors={sectors} />
          <Map center={sectors.find(s => s.value === selectedSector)?.latlng} zoomLevel={13} />
        </>
      </Modal.Window>
    </Modal>
  );
};

export default Search;
