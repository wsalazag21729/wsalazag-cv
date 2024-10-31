import styles from './introduction.module.scss';

const Introduction = ({ introductionInfo }) => {
    return (
        <div className="px-5 pt-4 pb-2">
            <h2>{introductionInfo.title}</h2>
            <p className={styles['introduction__text']}>
                {introductionInfo.description?.replace('**', '\n')}
            </p>
        </div>
    );
}
export default Introduction;
