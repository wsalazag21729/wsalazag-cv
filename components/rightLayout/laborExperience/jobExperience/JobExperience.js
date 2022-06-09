import cx from 'classnames';
import styles from './jobExperience.module.scss'

const JobExperience = ({ job }) => {
    return (
        <div className={cx("col-xl-5 col-12 px-3 pt-3 mx-3 my-2", styles['job-experience__container'])}>
            <p className={styles['job-experience__occupation']}>{job.occupation}</p>
            <span className={styles['job-experience__company']}>{job.company} {' - '}</span>
            <span className={styles['job-experience__city']}>{job.city}</span>
            <p className={styles['job-experience__date']}>{job.date}</p>
            <p className={styles['job-experience__description']}>{job.description}</p>
        </div>
    );
}
export default JobExperience;