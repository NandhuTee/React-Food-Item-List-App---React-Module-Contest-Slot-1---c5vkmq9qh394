import React, { useState } from 'react';

const List = () => {
  const [foods, setFoods] = useState([]);
  const [isFormEnabled, setIsFormEnabled] = useState(false);
  const [isFirstCodeEnabled, setIsFirstCodeEnabled] = useState(false);
  const [isSecondCodeEnabled, setIsSecondCodeEnabled] = useState(false);

  const [newFood, setNewFood] = useState({
    name: '',
    foodType: '',
    spicinessLevel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleAddFood = () => {
    setIsFirstCodeEnabled(true);
    setIsSecondCodeEnabled(true);
  };

  const handleSave = () => {
    setFoods([...foods, newFood]);
    setNewFood({ name: '', foodType: '', spicinessLevel: '' });
    setIsFirstCodeEnabled(false);
    setIsSecondCodeEnabled(false);
  };

  const handleDelete = (index) => {
    const updatedFoods = foods.filter((_, i) => i !== index);
    setFoods(updatedFoods);
  };

  const handleFormClick = () => {
    setIsFormEnabled(true);
  };

  return (
    <div>
      <button onClick={handleAddFood}>Add Food</button>

      {isFirstCodeEnabled && (
        <div className="code container">
          <input
            type="text"
            name="name"
            placeholder="Food name"
            value={newFood.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="foodType"
            placeholder="Food type"
            value={newFood.foodType}
            onChange={handleChange}
          />
          <div
            className="form"
            style={{ opacity: isFormEnabled ? 1 : 0.5 }}
            onClick={handleFormClick}
          >
            <input
              type="text"
              name="spicinessLevel"
              placeholder="Spiciness level"
              value={newFood.spicinessLevel}
              onChange={handleChange}
            />
          </div>
          {isSecondCodeEnabled && (
            <button onClick={handleSave}>Save</button>
          )}
        </div>
      )}

      <ul className="list displayed">
        {foods.map((food, index) => (
          <li key={index}>
            <span>{food.name}</span>
            <span>{food.foodType}</span>
            <span>{food.spicinessLevel}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
