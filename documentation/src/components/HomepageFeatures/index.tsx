import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    id: number
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description?: JSX.Element | string;
    iconBgColor?: string
};

const FeatureList: FeatureItem[] = [
    {
        id: 1,
        title: 'Attractive code architecture',
        description: 'Attractive Code Architecture Our boilerplate comes with a clean and organized code structure that enhances readability and maintainability.',
        iconBgColor: '#FFC0D9',
        Svg: require('@site/static/svg/attractive_code_architecture.svg').default
    },
    {
        id: 2,
        title: 'Environment Setup',
        description: `Environment Setup Hassle-free setup with detailed instructions, ensuring a smooth onboarding process for developers.`,
        iconBgColor: '#D0BFFF',
        Svg: require('@site/static/svg/settings.svg').default
    },
    {
        id: 3,
        title: 'Husky',
        description: `Husky Improves Your Commits and More Benefit from Husky's pre-commit hooks to enforce code quality and ensure that only well-formatted code makes it into your repository.`,
        iconBgColor: '#B5F1CC',
        Svg: require('@site/static/svg/husky_improves.svg').default
    },
    {
        id: 4,
        title: 'Local storage(MMKV)',
        description: `Local Storage (MMKV) Efficient and reliable local storage using MMKV, optimizing data persistence in your React Native application.`,
        iconBgColor: '#FFD8C0',
        Svg: require('@site/static/svg/cloud_done.svg').default
    },
    {
        id: 5,
        title: 'Navigation',
        description: `Navigation Seamless navigation setup with React Navigation, providing a smooth and intuitive user experience.`,
        iconBgColor: '#9FE9F6',
        Svg: require('@site/static/svg/pin_drop.svg').default
    },
    {
        id: 6,
        title: 'Supported for responsive UI',
        description: `Supported for Responsive UI Build responsive user interfaces that adapt to various screen sizes, providing a consistent user experience across devices.`,
        iconBgColor: '#FFC0D9',
        Svg: require('@site/static/svg/supported_for_responsive.svg').default
    },
    {
        id: 7,
        title: 'Context API',
        description: `Advanced State Management with Redux and Context API Harness the power of both Redux and React's Context API for efficient state management.`,
        iconBgColor: '#D0BFFF',
        Svg: require('@site/static/svg/context.svg').default
    },

    {
        id: 8,
        title: 'Eslint for better code linting',
        description: `Eslint for Better Code Linting Catch and fix issues early with Eslint integration, promoting consistent and error-free code.`,
        iconBgColor: '#B5F1CC',
        Svg: require('@site/static/svg/eslint_for_better.svg').default
    },

    {
        id: 9,
        title: 'Light/Dark custom theme modes',
        description: `Light/Dark Custom Theme Modes Enjoy the flexibility of light and dark theme modes with easy customization options to suit your app's design. This feature is seamlessly managed through the Context API.`,
        iconBgColor: '#FFD8C0',
        Svg: require('@site/static/svg/lightbulb.svg').default
    },

    {
        id: 10,
        title: 'Localization',
        description: `Localization Easily add multilingual support to your app with our localization feature, utilizing the power of the Context API for seamless language switching and management.`,
        iconBgColor: '#9FE9F6',
        Svg: require('@site/static/svg/localization.svg').default
    },

    {
        id: 11,
        title: 'Network request',
        description: `Network Request (API Implementation) Simplified API integration for making network requests, saving you time and effort in implementing backend communication.`,
        iconBgColor: '#FFC0D9',
        Svg: require('@site/static/svg/network_request.svg').default
    },

    {
        id: 12,
        title: 'Typescript',
        description: `TypeScript Harness the benefits of TypeScript for static typing, catching errors at compile-time, and improving code quality. The combination of TypeScript with Redux and Context API ensures a robust and type-safe application architecture.`,
        iconBgColor: '#9FE9F6',
        Svg: require('@site/static/svg/typescript.svg').default
    },
];

function Feature({ title, Svg, description, id, iconBgColor }: FeatureItem) {
    return (
        <div key={id.toString()} className={clsx(styles.item_view)}  >
            <div className={clsx(styles.icon_view)} style={{ backgroundColor: iconBgColor }
            }>
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className={clsx(styles.item_content)}>
                <span className={clsx(styles.card_title)}>{title}</span>
                <div className={clsx(styles.divider)}></div>
                <p className={clsx(styles.card_description)}>{description}</p>
            </div>
        </div >
    );
}

const HomepageFeatures = (): JSX.Element => {
    return (
        <section className={styles.features}>
            <span className={clsx(styles.section_title)}>Our Features</span>
            <div className="container mt-24">
                <div className={clsx(styles.grid_view)}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomepageFeatures