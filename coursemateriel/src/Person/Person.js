


const person = ( props) => {

    return(
        <div>
            <p onClick={props.click}> I am {props.name} and may age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value ={props.name} /> 
        </div>
    )

};

export default person;