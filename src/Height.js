function Height(props){

    const height=props.height;

    function tall(){
        return(
        <p>This guy is tall!</p>
        );
    }
    function short(){
        return(
            <p>Sorry you are not tall enough.</p>
        );
    }
    
    return(height ? tall() : short());
}
export default Height;