function Maptest1(){
    const myArray = ["apple", "banana", "orange"];


    return(
        <div>
            {
            myArray.map((item) =>{
                return <li>{item}</li>
            })
            }
        </div>
    );
}


export default Maptest1;