import React, {useState} from 'react';

function MyComponent (){

    const [car , setCar] = useState({year: 2024, 
                                    model: "Mustang", 
                                    make: "Ford"}); 

    function handleCarYear (event) {
        setCar({...car, year: 2025});
    }  
    
    function handleCarMake (event) {
        setCar();
    }     

    function handleCarModel (event) {
        setCar();
    }     

    return (<div>
                <p>my favourite car is {car.make} - {car.model} of year: {car.year}</p>

                <input type="number" value={car.year} onchange={handleCarYear} /><br/>
                <input type="text" value={car.model} onchange={handleCarModel} /><br/>
                <input type="text" value={car.make} onchange={handleCarMake} /><br/>
            </div>);                                

}
export default MyComponent;