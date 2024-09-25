import style from '../style/person.module.css';
import CETimg from '@/assets/img/CET.jpg';
const Person = () => {
    return (<>
        <img src={CETimg} alt="" style={{position:'absolute',width: '100%',filter: 'blur(5px)'}}/>
        <section>
            <div className={style.main}>

            </div>
        </section>
    </>
    );
}

export default Person;