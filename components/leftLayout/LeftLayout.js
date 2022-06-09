import Head from 'next/head';
import cx from 'classnames';
import CvHeader from './cvHeader/CvHeader';
import BackHomeButton from './backHomeButton/BackHomeButton';
import styles from './leftLayout.module.scss';
import { SITE_TITLE } from '../../constants/constants';

const LeftLayout = ({ children, home }) => {
    return (
        <div className={cx('col-xl-3 col-lg-5 col-12', styles['left-layout__container'])}>
            <CvHeader home={home} />
            <main>{children}</main>
            <BackHomeButton home={home} />
        </div>
    );
}
export default LeftLayout;