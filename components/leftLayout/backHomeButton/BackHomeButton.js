import Link from 'next/link';
import styles from '../leftLayout.module.scss';

const BackHomeButton = ({ home }) => (
    <>
        {!home && (
            <div className={styles['left-layout__back-to-home']}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )}
    </>
);
export default BackHomeButton;