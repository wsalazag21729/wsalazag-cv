
import cx from 'classnames';
import LabelValue from '../labelValue/LabelValue';
import styles from '../../../styles/utils.module.scss';
import {
    LANGUAGES_INFORMATION_TITLE,
    LANGUAGES_INFORMATION
} from '../../../constants/constants';

const LanguagesList = () => {
    return (
        <>
            <h4 className={cx('ps-5', styles['utils__list-title'])}>
                {LANGUAGES_INFORMATION_TITLE}
            </h4>
            {LANGUAGES_INFORMATION.map(item =>
                <LabelValue key={item.value} label={item.label} value={item.value} />)
            }
        </>
    );
}
export default LanguagesList;