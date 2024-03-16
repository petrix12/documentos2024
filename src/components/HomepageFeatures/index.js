import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Laravel',
    Svg: require('@site/static/img/laravel-logo.svg').default,
    description: (
      <>
        Laravel es un framework de código abierto para desarrollar 
        aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8
      </>
    ),
  },
  {
    title: 'Vue.js',
    Svg: require('@site/static/img/vue-logo.svg').default,
    description: (
      <>
        Vue.js es un framework de JavaScript de código abierto para la construcción 
        de interfaces de usuario y aplicaciones de una sola página.
      </>
    ),
  },
  {
    title: 'MySQL',
    Svg: require('@site/static/img/mysql-logo.svg').default,
    description: (
      <>
        MySQL es un sistema de gestión de bases de datos relacional desarrollado 
        bajo licencia dual: Licencia pública general/Licencia comercial por Oracle 
        Corporation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
