import cx from 'classnames';
import PerfilImage from '../perfilImage/perfilImage'
import styles from '../leftLayout.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import { NAME } from '../../../constants/constants';

const CvHeader = () => (
    <header className={styles['left-layout__header']}>
        <PerfilImage
            className={utilStyles['utils__border-circle']}
            size={184}
        />
        <h1 className={cx('text-center pb-4', utilStyles['utils__heading-2Xl'])}>{NAME}</h1>
    </header>
);
export default CvHeader;