"use client";
import React, { useEffect, useRef } from "react";
import Select from "react-select";
import activities from "@/data/activities.json"; // Asegúrate de que la ruta es correcta

export type ActivitySelectValue = {
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

const ActivitySelect = ({
  value,
  onChange,
  options,
}: {
  value?: ActivitySelectValue;
  onChange: (name: string, val: ActivitySelectValue) => void;
  options: ActivitySelectValue[];
}) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.focus();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (value: ActivitySelectValue) => {
    onChange("location", value);
  };

  return (
    <Select
      ref={ref}
      placeholder="Selecciona una categoría"
      isClearable
      options={options}
      value={value}
      onChange={handleChange}
      formatOptionLabel={(option: any) => (
        <div className="flex flex-row items-center gap-3 z-[10]">
          <div>
            {option.label}
            <span className="text-neutral-500 ml-1">{option.region}</span>
          </div>
        </div>
      )}
      classNames={{
        control: () => "p-[6px] text-[14px] border-1",
        input: () => "text-[14px]",
        option: () => "text-[14px]",
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: "black",
          primary25: "#ffe4e6",
        },
      })}
    />
  );
};

export default ActivitySelect;
