import React from "react";

const Gender = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-400">Gender</span>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={value === "male"}
            onChange={onChange}
            className="h-4 w-4 accent-[#C654C3]"
          />
          Male
        </label>
        <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={value === "female"}
            onChange={onChange}
            className="h-4 w-4 accent-[#C654C3]"
          />
          Female
        </label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Gender;