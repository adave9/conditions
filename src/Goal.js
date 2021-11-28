function Goal(props){
    const isGoal=props.isGoal;

    if(isGoal){
        return(
            <p>U made a Goal!</p>
        );
    }
    else{
        return(
            <p>U missed!</p>
        );
    }

}
export default Goal;