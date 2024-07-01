import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '@site/src/components/HomepageHeader'

import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero--primary', styles.heroBanner)}>
//       <div className={clsx('container', styles.container_layout)}>
//         <Heading as="h1" className={clsx('hero__title', styles.header_text)}>
//           React Native Boilerplate
//         </Heading>
//         <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--primary button--lg"
//             to="/docs/intro">
//             Get started
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {

  return (
    <Layout>
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}


