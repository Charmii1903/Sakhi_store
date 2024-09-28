
import React, { useState } from "react";


type FilterProps = {
  onChange: (filters: FilterType) => void;
};

const Filter: React.FC<FilterProps> = ({ onChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [color, setColor] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
    onChange({ price: newPriceRange, color, size });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColor((prevColors) =>
      prevColors.includes(selectedColor)
        ? prevColors.filter((c) => c !== selectedColor)
        : [...prevColors, selectedColor]
    );
    onChange({ price: priceRange, color: [...color], size });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSize = e.target.value;
    setSize((prevSizes) =>
      prevSizes.includes(selectedSize)
        ? prevSizes.filter((s) => s !== selectedSize)
        : [...prevSizes, selectedSize]
    );
    onChange({ price: priceRange, color, size: [...size] });
  };

  return (
    <div className="filter-container p-4 border border-gray-200 rounded mb-8">
      <h3 className="text-lg font-bold mb-4">Filters</h3>

      {/* Price Range Filter */}
      <div className="filter-section mb-4">
        <label className="block font-semibold">Price Range</label>
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          className="border p-1 mr-2"
          placeholder="Min Price"
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          className="border p-1"
          placeholder="Max Price"
        />
      </div>

      {/* Color Filter */}
      <div className="filter-section mb-4">
        <label className="block font-semibold">Color</label>
        <input type="checkbox" value="Red" onChange={handleColorChange} /> Red
        <input type="checkbox" value="Blue" onChange={handleColorChange} /> Blue
        <input type="checkbox" value="Green" onChange={handleColorChange} /> Green
      </div>

      {/* Size Filter */}
      <div className="filter-section mb-4">
        <label className="block font-semibold">Size</label>
        <input type="checkbox" value="S" onChange={handleSizeChange} /> S
        <input type="checkbox" value="M" onChange={handleSizeChange} /> M
        <input type="checkbox" value="L" onChange={handleSizeChange} /> L
      </div>
    </div>
  );
};

export default Filter;
