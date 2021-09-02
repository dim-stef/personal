import Header from '../Header';
import styles from './layout.module.css';

function Layout({children}){
  return(
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        {children}

      </div>
    </div>
  )
}

export default Layout;
