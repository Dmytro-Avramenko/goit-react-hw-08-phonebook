import { Blocks } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export function Loader() {
  return (
    <div className={s.loader}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
}

export default Loader