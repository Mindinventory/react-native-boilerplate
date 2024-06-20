import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero--primary', styles.heroBanner)}>
            <div className={clsx('container', styles.container_layout)}>
                <Heading as="h1" className={clsx('hero__title', styles.header_text)}>
                    React Native Boilerplate
                </Heading>
                <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/intro">
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HomepageHeader