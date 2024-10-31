import cx from 'classnames';
import Link from 'next/link';
import styles from '../../styles/introduction.module.scss';

const Introduction = ({ introductionInfo }) => {
    return (
        <div className="px-5 pt-4 pb-2">
            <h2>{introductionInfo.title}</h2>
            <p className={cx('justify-content-center', styles['introduction__text'])}>
                {introductionInfo.description?.replace('**', '\n')}
            </p>
        </div>
    );
}
export default Introduction;
