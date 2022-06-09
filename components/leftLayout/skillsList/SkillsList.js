
import cx from 'classnames';
import styles from '../../../styles/utils.module.scss';
import {
    SKILLS_INFORMATION_TITLE,
    SKILLS_INFORMATION,
} from '../../../constants/constants';

const SkillsList = () => {
    return (
        <>
            <h4 className={cx('ps-5', styles['utils__list-title'])}>
                {SKILLS_INFORMATION_TITLE}
            </h4>
            {SKILLS_INFORMATION.map(skill =>
                <div key={skill} className='col-xl-7 col-12  ps-5'>
                    <p className={cx('text-left mb-0', styles['utils__value'])}>{skill}</p>
                </div>
            )}
            <div className={styles['utils__separator']} />
        </>
    );
}
export default SkillsList;