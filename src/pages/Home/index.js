import React, { useState } from 'react';
import { Button, Area} from './styles';

const Home = () => {

    const [value, setValue] = useState(true);
    const [text, setText] = useState('Maks');
    const [data, setData] = useState([{
        name: 'Dubi',
        password: '222'
    }])


    const array = [1, 2, 3, 5, 8];

    const handlerChange = () => {
        setValue(!value);
        console.log(value);
    }

    return (
        <div>
            <h1>Home page</h1>


            <Button onClick={handlerChange}>Press Me</Button>
            <Area value={value} />


            <Button onClick={() => setText('Dubina')}>Set Text</Button>
            <p>{text}</p>
            


            <Button onClick={() => setData([...data, {name: 'maks', password: '1111'}])}>Add object</Button>
                {
                    data.map(item => (
                        <>
                            <p>{item.name}</p>
                            <p>{item.password}</p>
                        </>
                    )
                    )}


            {
            array.map((element) => (
               <div>
                    <p>{element * 2}</p>
               </div>
            ))
            }


        </div>
    );
}

export default Home;