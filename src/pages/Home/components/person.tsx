import { useRef, useState } from 'react';
import style from '../style/person.module.css';
import CETimg from '@/assets/img/CET.jpg';
const Person = () => {
    const [name,setName]=useState("");
    const input=useRef<HTMLInputElement>(null)
    return (<>
        <img src={CETimg} alt="" style={{position:'absolute',width: '100%',filter: 'blur(5px)'}}/>
        <section>
            <div className={style.main}>
            <input value={name} ref={input}/>  
            </div>
        </section>
    </>
    );
}

export default Person;
