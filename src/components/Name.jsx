import React from "react";

const Name = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name" className="text-sm font-medium text-gray-400">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="add name"
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C654C3] focus:border-transparent"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Name;