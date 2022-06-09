
import cx from 'classnames';
import LabelValue from '../labelValue/LabelValue';
import styles from '../../../styles/utils.module.scss';
import {
    PERSONAL_INFORMATION_TITLE,
    PERSONAL_INFORMATION,
} from '../../../constants/constants';

const InformationList = () => {
    return (
        <>
            <h4 className={cx('ps-5', styles['utils__list-title'])}>
                {PERSONAL_INFORMATION_TITLE}
            </h4>
            {PERSONAL_INFORMATION.map(item =>
                <LabelValue key={item.value} label={item.label} value={item.value} />)
            }
            <div className={styles['utils__separator']} />
        </>
    );
}
export default InformationList;