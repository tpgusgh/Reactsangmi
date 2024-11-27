function 맵테스트2(){
    const items = [
        {id :1, name: '빵'},
        {id :2, name: '우유'},
        {id :3, name: '달걀'}
    ]
    const ages = [32,33,16,40];
    const result = ages.filter((item) => item > 30);
    console.log(result) 
    return(
        <div>
            <h1>식료품 리스트</h1>
            {
                items.map((item) => {
                    return <li>{item.id}{item.name}</li>
                })
            }
            <h1>필터결과</h1>
            {
                result.map((item) => {return <li>{item}</li>})
            }
        </div>
    );
}


export default 맵테스트2;