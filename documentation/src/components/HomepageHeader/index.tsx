import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HeaderImg from '../../../static/img/hero_header_img.webp'

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero--primary', styles.heroBanner)}>
            <div className={clsx(styles.header_img_container)}>
                <div className={clsx(styles.header_img_wrapper)}>
                    <img src={HeaderImg} alt="react-native-boilerplate" className={clsx(styles.header_img)} />
                </div>
                <div className={'container h-full  flex items-start lg:items-center xl:items-center 2xl:items-center z-50'}>
                    <div className={clsx(styles.header_content_view)}>
                        <Heading as="h1" className={clsx('hero__title', styles.header_text)}>
                            React Native Boilerplate
                        </Heading>
                        <p className={clsx('hero__subtitle z-50', styles.subtitle)}>{siteConfig.tagline}</p>
                        <div className={styles.buttons}>
                            <Link
                                className="
                        button button--primary button--lg"
                                to="/docs/intro">
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default HomepageHeader