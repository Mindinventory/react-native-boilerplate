import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HeaderImg from '../../../static/img/hero_header_img.png'

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero--primary', styles.heroBanner)}>
            {/* <div className='h-fit relative '>
                <div className='right-16 top-0 absolute z-10 w-fit'>
                    <img src={HeaderImg} alt="header-hero-img" className={clsx(styles.header_img)} />
                </div>
            </div> */}
            <div className={clsx(styles.header_img_container)}>
                <div className={clsx(styles.header_img_wrapper)}>
                    <img src={HeaderImg} alt="header-hero-img" className={clsx(styles.header_img)} />
                </div>
            </div>
            <div className={clsx('container h-full z-50', styles.container_layout)}>
                {/* <Heading as="h1" className={clsx('hero__title', styles.header_text)}>
                    React Native Boilerplate
                </Heading>
                <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="
                        button button--primary button--lg"
                        to="/docs/intro">
                        Get started
                    </Link>
                </div> */}
                {/* <div className='flex flex-col z-50 justify-center  h-full w-1/2'>
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
                </div> */}
            </div>
        </header>
    );
}

export default HomepageHeader