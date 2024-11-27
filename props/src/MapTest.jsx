function MapTest(){
    const cars = ["ford","BMW","Audi"]
    return(
        <div>
            <h1>차고에 있는 차 목록</h1>
            {
            cars.map((item) => {return <li>{item}</li>})
            }
            {
            cars.map((item) => {return <Car brand = {item}/>})
            }
        </div>
    );
}

function Car(pros){
    return (
        <li>나는 {pros.brand}입니다.</li>
    );
}




export default MapTest;