import React, {useState} from 'react';

function MyComponent (){

    const [car, setCar] = useState({year: 2024, 
                                    model: "Mustang", 
                                    make: "Ford"}); 

    function handleCarYear (event) {
        setCar(c => ({...c, year : event.target.value}));
    }  
    
    function handleCarModel (event) {
        setCar(c => ({...c, model : event.target.value}));
    }     

    function handleCarMake (event) {
        setCar(c => ({...c, make : event.target.value}));
    }     

    return (<div>
                <p>my favourite car is {car.make} - {car.model} of year: {car.year}</p>

                <input type="number" value={car.year} onChange={handleCarYear} /><br/>
                <input type="text" value={car.model} onChange={handleCarModel} /><br/>
                <input type="text" value={car.make} onChange={handleCarMake} /><br/>
            </div>);                                

}
export default MyComponent;