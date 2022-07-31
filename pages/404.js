import RootLayout from '../component/RootLayout';
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
        return(
            <RootLayout>
                <div className={styles.container}>
                    <h1 className={styles.header}>Page Not Found</h1>
                </div>
            </RootLayout>
        )
}

export default NotFound;