import React, { useState, useEffect } from 'react';
import "./single.scss";

type Props = {
    id: number;
};

type CarDetails = {
    id: number;
    brand: string;
    color: string;
    description: string;
    model: string;
    motor_type: string;
    name: string;
    place_number: string;
    power: number;
    price: number;
    status: string;
    type: string;
};

const Singlec = (props: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8086/cars/find/${4}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch car details');
                }
                const data = await response.json();
                setCarDetails(data);
                setLoading(false);
                console.log(data);
                
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        };

        fetchCarDetails();
    }, [props.id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarDetails((prevDetails) => prevDetails ? { ...prevDetails, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!carDetails) return;

        try {
            const response = await fetch(`http://localhost:8086/cars/${4}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carDetails),
            });

            if (!response.ok) {
                throw new Error('Error updating car details');
            }

            const updatedCar = await response.json();
            setCarDetails(updatedCar);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update car details:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!carDetails) {
        return <div>Error loading car details</div>;
    }

    return (
        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        <button onClick={() => setIsEditing(!isEditing)}>Update</button>
                    </div>
                    <div className="details">
                        {isEditing ? (
                            <form onSubmit={handleSubmit}>
                                {Object.keys(carDetails).map((key) => (
                                    <div className="item" key={key}>
                                        <label>{key}</label>
                                        <input
                                            name={key}
                                            type={
                                                key === 'power' || key === 'price'
                                                    ? 'number'
                                                    : key === 'motor_type'
                                                    ? 'text'
                                                    : 'text'
                                            }
                                            value={(carDetails as any)[key]}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                ))}
                                <button type="submit">Save</button>
                            </form>
                        ) : (
                            <div className="item" key={carDetails.id}>
                                <span className="itemTitle">Brand: {carDetails.brand}</span>
                                <span className="itemTitle">Color: {carDetails.color}</span>
                                <span className="itemTitle">Description: {carDetails.description}</span>
                                <span className="itemTitle">Model: {carDetails.model}</span>
                                <span className="itemTitle">Motor Type: {carDetails.motor_type}</span>
                                <span className="itemTitle">Name: {carDetails.name}</span>
                                <span className="itemTitle">Place Number: {carDetails.place_number}</span>
                                <span className="itemTitle">Power: {carDetails.power}</span>
                                <span className='itemValue'>Price: {carDetails.price}</span>
                                <span className='itemValue'>Status: {carDetails.status}</span>
                                <span className='itemValue'>Type: {carDetails.type}</span>
                            </div>
                        )}
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Singlec;
