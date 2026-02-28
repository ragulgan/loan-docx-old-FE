import React from 'react';

const FilterCard = ({ label, value, options, onChange }) => {
    return (
        <div>
            <label className="roboto-regular s-text-color fs-16 mb-2 d-block">
                {label}
            </label>
            <select
                className="form-select fs-14"
                value={value}
                onChange={onChange}
            >
                {options.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterCard;
