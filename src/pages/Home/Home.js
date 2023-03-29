import s from '../Home/Home.module.css';
import { ReactComponent as Book } from '../../components/images/home_start.svg';

export default function Home() {
  return (
    <div className={s.home}>
      <div className={s.home_start}>
        <h2 className={s.home_title}><b>your phonebook</b></h2>
        <Book className={s.phone} />              
      </div>      
    </div>
  );
}
