import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import { carShow } from '../api/car'
import { carUpdate } from '../api/car'
import CarUpdate from './CarUpdate'
import { CarDelete } from '../api/car'


const CarShow = ({ user, msgAlert }) => {

    const [car, setCar] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        
        carShow(user, id)// here
        .then(res => {
            setCar(res.data.car)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Car Failure' + error,
                variant: 'danger'
            })
        })
    }, []) 
    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }
    
    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setCar({...car, [event.target.name]: event.target.value})
    }
    const handleUpdateCar = () => {
        carUpdate(car,user,id)
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
    const navigate = useNavigate()

    //delete
    const handleDeleteCar = () => {
        CarDelete(user,id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Deleted Car',
                variant: 'success'
            })
        })
        .then(()=> {navigate('/cars')})
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Car Failure' + error,
                variant: 'danger'
            })
        })
    }
    //logical &&
    //both sides of this check need to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy to be true

    return (
        <>
            <h3>Brand: {car.brand}</h3>
            <p>Model: {car.model}</p>
            <button onClick={toggleShowUpdate}>Update</button>
            {isUpdateShown && (<CarUpdate car={car}
            handleChange ={handleChange}
            handleUpdateCar ={handleUpdateCar}/>)}
            <button onClick={handleDeleteCar}>Delete</button>
            
        </>
    )
}

export default CarShow