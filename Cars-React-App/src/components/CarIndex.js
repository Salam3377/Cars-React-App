import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { carIndex } from '../api/car'// here to line 10 from api/car.js

const CarIndex = ({ user, msgAlert }) => {

    const [allCars, setAllCars] = useState([])

    useEffect(() => {
        carIndex(user)// this line from line 3
        .then(res => {
            setAllCars(res.data.cars)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Cars Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCarsJSX = allCars.map(car => {
        return (
            <Link to={car._id} key={car._id}>
            <li>Brand: {car.brand} : Model {car.model}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCarsJSX}</ul>
        </>
    )
}

export default CarIndex