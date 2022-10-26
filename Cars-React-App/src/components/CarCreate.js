import React, { useState } from 'react' 
import { carCreate } from '../api/car'

const CarCreate = ({ user, msgAlert }) => {

    const defaultCar = {
        brand: '',
        model: ''
    }

    const [car, setCar] = useState(defaultCar)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current car
        // then comma and modify the key to the value you need
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleCreateCar = () => {
        carCreate(car, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Car',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Car Failure' + error,
                variant: 'danger'
            })
        })
    }

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
				<button onClick={handleCreateCar}>Create Car</button>
			</>
		)
}

export default CarCreate