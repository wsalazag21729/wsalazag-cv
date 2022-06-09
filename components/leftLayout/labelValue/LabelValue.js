import cx from 'classnames';
import styles from '../../../styles/utils.module.scss';

const LabelValue = ({ label, value }) => (
    <div className="w-100 row text-left ps-5 pt-1">
        <div className='col-xl-4 col-12'>
            <p className={cx('text-left mb-0', styles['utils__label'])}>{label}</p>
        </div>
        <div className='col-xl-7 col-12'>
            <p className={cx('text-left mb-0', styles['utils__value'])}>{value}</p>
        </div>
    </div>
);
export default LabelValue;