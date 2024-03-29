import styles from './Footer.module.scss';
import footer from '../../../global/assets/images/footer.svg';
import Field from '../Field/Field.tsx';
import Submit from '../Submit/Submit.tsx';

const Footer = () => {
    return (
        <div className={styles.FooterContainer} style={{backgroundColor: '#292D33'}}>
            <img src={footer} alt="footer"/>
            <div className={styles.contactContainer}>
                <div className={styles.contactText}>Contact Us!</div>
                <Field height={66} text="Enter your name"/>
                <Field height={66} text="Enter a valid email address"/>
                <Field height={210} text="Enter your message"/>
                <Submit/>
            </div>
        </div>
    )
        ;
}

export default Footer;
