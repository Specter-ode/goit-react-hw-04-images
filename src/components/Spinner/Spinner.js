import { InfinitySpin } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <InfinitySpin width="200" color="#3f51b5" />
    </div>
  );
};

export default Spinner;
