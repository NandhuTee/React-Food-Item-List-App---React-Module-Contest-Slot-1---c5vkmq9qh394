import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
    const [foods, setFoods] = useState([]);
    const [itemName, setItemName] = useState("");
    const [foodType, setFoodType] = useState("");
    const [spicinessLevel, setSpicinessLevel] = useState("");
    const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
    const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
    const [isFormEnabled, setIsFormEnabled] = useState(false);

    const handleAddFood = () => {
        setIsFirstCardEnabled(true);
    };

    const handleSave = () => {
        const newFood = {
            itemName: itemName,
            foodType: foodType,
            spicinessLevel: spicinessLevel
        };
        setFoods([...foods, newFood]);
        setItemName("");
        setFoodType("");
        setSpicinessLevel("");
        setIsFirstCardEnabled(false);
        setIsSecondCardEnabled(false);
    };

    const handleDelete = (index) => {
        const updatedFoods = [...foods];
        updatedFoods.splice(index, 1);
        setFoods(updatedFoods);
    };

    const handleFormClick = () => {
        setIsFormEnabled(true);
    };

    return (
        <>
            <div className="container">
                <h1>Food Items List</h1>
                <button onClick={handleAddFood} style={{ display: isFirstCardEnabled ? "none" : "block" }}>Add Food</button>

                <div className={`card-container ${isFirstCardEnabled ? "visible" : ""}`}>
                    <>
                        <h2>Item Name:</h2>
                        <input
                            name="itemName"
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                        <h2>Food Type:</h2>
                        <input
                            name="foodType"
                            type="text"
                            value={foodType}
                            onChange={(e) => setFoodType(e.target.value)}
                        />
                        <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
                            <form onClick={handleFormClick}>
                                <h2>Spiciness Level:</h2>
                                <input
                                    name="spicinessLevel"
                                    type="text"
                                    value={spicinessLevel}
                                    onChange={(e) => setSpicinessLevel(e.target.value)}
                                    disabled={!isFormEnabled}
                                />
                            </form>
                            <button onClick={handleSave} style={{ display: isSecondCardEnabled ? "block" : "none" }}>Save</button>
                        </div>
                    </>
                </div>

                <ul className="list">
                    {foods.map((food, index) => (
                        <li key={index}>
                            {food.itemName} ({food.foodType}) - Spiciness Level: {food.spicinessLevel}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default FoodList;
