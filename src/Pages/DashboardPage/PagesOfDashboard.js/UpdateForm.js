import React, { useState } from "react";

const UpdateForm = ({ item, handleUpdate, fields }) => {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
