import cx from 'classnames';
import styles from './education.module.scss'

const Education = ({ educationInfo }) => {
    return (
        <div className="row px-5 my-4">
            <h2>{educationInfo.title}</h2>
            {
                educationInfo.education?.map(education => (
                    <div className={cx("col-xl-5 col-12 px-3 pt-3 ms-3 my-2", styles['education__container'])}>
                        <p className={styles['education__title']}>{education.title}</p>
                        <span className={styles['education__college']}>{education.college} {' - '}</span>
                        <span className={styles['education__city']}>{education.city}</span>
                        <p className={styles['education__date']}>{education.date}</p>
                    </div>
                ))
            }
        </div>

    );
}
export default Education;