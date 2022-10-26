import React from "react";

const CarUpdate = ({car, handleChange,handleUpdateCar}) => {
    return (
        <>
        <input
                type='text'
                value={car.brand}
                name='brand'
                onChange={handleChange}
            />
            <input
                type='text'
                value={car.model}
                name='model'
                onChange={handleChange}
            />
            <button onClick={handleUpdateCar}>Update Car</button>
        </>
    )
}

export default CarUpdate