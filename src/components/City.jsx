import React from "react";

const City = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <select
        name="city"
        id="city"
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C654C3]"
      >
        <option value="" disabled>
          Choose Your City
        </option>
        <option value="Sheki">Sheki</option>
        <option value="Baku">Baku</option>
        <option value="Ganja">Ganja</option>
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default City;