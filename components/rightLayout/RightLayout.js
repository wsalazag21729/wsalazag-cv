
import cx from 'classnames';
import styles from './rightLayout.module.scss'
import utilStyles from '../../styles/utils.module.scss';

const RightLayout = ({ children }) => {
    return (
        <div className={cx('d-flex col-xl-9 col-lg-7 col-12', styles['right-layout__container'])}>
            <div className={utilStyles['utils__section-container']}>
                {children}
            </div>
        </div>
    );
}
export default RightLayout;