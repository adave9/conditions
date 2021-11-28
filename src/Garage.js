function Garage(props){
    const cars=props.cars;
        if(cars.length>0 && cars.length<=5){
            return(<p>You have {cars.length} currently parked.</p>);
        }
        else{
            return(<p>Your Garage is full.</p>);
        }
}
export default Garage;