import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentos2024/blog',
    component: ComponentCreator('/documentos2024/blog', 'cef'),
    exact: true
  },
  {
    path: '/documentos2024/blog/archive',
    component: ComponentCreator('/documentos2024/blog/archive', 'e4b'),
    exact: true
  },
  {
    path: '/documentos2024/blog/first-blog-post',
    component: ComponentCreator('/documentos2024/blog/first-blog-post', '6f4'),
    exact: true
  },
  {
    path: '/documentos2024/blog/long-blog-post',
    component: ComponentCreator('/documentos2024/blog/long-blog-post', '74f'),
    exact: true
  },
  {
    path: '/documentos2024/blog/mdx-blog-post',
    component: ComponentCreator('/documentos2024/blog/mdx-blog-post', '872'),
    exact: true
  },
  {
    path: '/documentos2024/blog/tags',
    component: ComponentCreator('/documentos2024/blog/tags', '997'),
    exact: true
  },
  {
    path: '/documentos2024/blog/tags/docusaurus',
    component: ComponentCreator('/documentos2024/blog/tags/docusaurus', '5e2'),
    exact: true
  },
  {
    path: '/documentos2024/blog/tags/facebook',
    component: ComponentCreator('/documentos2024/blog/tags/facebook', '914'),
    exact: true
  },
  {
    path: '/documentos2024/blog/tags/hello',
    component: ComponentCreator('/documentos2024/blog/tags/hello', '26c'),
    exact: true
  },
  {
    path: '/documentos2024/blog/tags/hola',
    component: ComponentCreator('/documentos2024/blog/tags/hola', 'ff3'),
    exact: true
  },
  {
    path: '/documentos2024/blog/welcome',
    component: ComponentCreator('/documentos2024/blog/welcome', '625'),
    exact: true
  },
  {
    path: '/documentos2024/markdown-page',
    component: ComponentCreator('/documentos2024/markdown-page', '99e'),
    exact: true
  },
  {
    path: '/documentos2024/docs',
    component: ComponentCreator('/documentos2024/docs', '120'),
    routes: [
      {
        path: '/documentos2024/docs',
        component: ComponentCreator('/documentos2024/docs', '93f'),
        routes: [
          {
            path: '/documentos2024/docs',
            component: ComponentCreator('/documentos2024/docs', 'deb'),
            routes: [
              {
                path: '/documentos2024/docs/00laravel/cursos/apirestfull',
                component: ComponentCreator('/documentos2024/docs/00laravel/cursos/apirestfull', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/cursos/laravel_passport',
                component: ComponentCreator('/documentos2024/docs/00laravel/cursos/laravel_passport', 'b5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/cursos/laravel8',
                component: ComponentCreator('/documentos2024/docs/00laravel/cursos/laravel8', '66f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/cursos/laravel8_aws',
                component: ComponentCreator('/documentos2024/docs/00laravel/cursos/laravel8_aws', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/laravel10',
                component: ComponentCreator('/documentos2024/docs/00laravel/laravel10', 'c50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/laravel11',
                component: ComponentCreator('/documentos2024/docs/00laravel/laravel11', '221'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/proyectos/2020_08_clinica',
                component: ComponentCreator('/documentos2024/docs/00laravel/proyectos/2020_08_clinica', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/proyectos/2021_03_multiples_file',
                component: ComponentCreator('/documentos2024/docs/00laravel/proyectos/2021_03_multiples_file', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/proyectos/2021_06_plataforma_cursos',
                component: ComponentCreator('/documentos2024/docs/00laravel/proyectos/2021_06_plataforma_cursos', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/proyectos/2021_08_upload_file',
                component: ComponentCreator('/documentos2024/docs/00laravel/proyectos/2021_08_upload_file', 'bc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/00laravel/test',
                component: ComponentCreator('/documentos2024/docs/00laravel/test', '15a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/02vue/vue',
                component: ComponentCreator('/documentos2024/docs/02vue/vue', 'ad8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/docusaurus',
                component: ComponentCreator('/documentos2024/docs/03react/docusaurus', 'f1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/intro',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/intro', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/congratulations',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/congratulations', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-blog-post', 'ebc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-document', '281'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/create-a-page', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/deploy-your-site', 'a6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-basics/markdown-features', '49e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-extras/manage-docs-versions', '9c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/03react/tutorial/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentos2024/docs/03react/tutorial/tutorial-extras/translate-your-site', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/06jquery/jquery',
                component: ComponentCreator('/documentos2024/docs/06jquery/jquery', 'a94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/10arquitectura/arquitectura_hexagonal',
                component: ComponentCreator('/documentos2024/docs/10arquitectura/arquitectura_hexagonal', 'ef2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/10arquitectura/solid',
                component: ComponentCreator('/documentos2024/docs/10arquitectura/solid', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/14docker/docker',
                component: ComponentCreator('/documentos2024/docs/14docker/docker', 'af3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/15blockchain/solidity',
                component: ComponentCreator('/documentos2024/docs/15blockchain/solidity', 'a65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/16webdeveloper/curso_dw',
                component: ComponentCreator('/documentos2024/docs/16webdeveloper/curso_dw', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/30styles/css',
                component: ComponentCreator('/documentos2024/docs/30styles/css', 'b3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/50vsc/vsc',
                component: ComponentCreator('/documentos2024/docs/50vsc/vsc', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/90chrome/chrome',
                component: ComponentCreator('/documentos2024/docs/90chrome/chrome', 'c75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/97otros/hwasung',
                component: ComponentCreator('/documentos2024/docs/97otros/hwasung', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/97otros/otros',
                component: ComponentCreator('/documentos2024/docs/97otros/otros', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/98revisar/99pruebas/prueba2',
                component: ComponentCreator('/documentos2024/docs/98revisar/99pruebas/prueba2', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/98revisar/markdown',
                component: ComponentCreator('/documentos2024/docs/98revisar/markdown', '94f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/98revisar/sitios',
                component: ComponentCreator('/documentos2024/docs/98revisar/sitios', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/98revisar/wireui',
                component: ComponentCreator('/documentos2024/docs/98revisar/wireui', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/apuntes-en-revisión',
                component: ComponentCreator('/documentos2024/docs/category/apuntes-en-revisión', 'b03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/arquitecturas',
                component: ComponentCreator('/documentos2024/docs/category/arquitecturas', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/blockchain',
                component: ComponentCreator('/documentos2024/docs/category/blockchain', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/cursos-laravel',
                component: ComponentCreator('/documentos2024/docs/category/cursos-laravel', 'c22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/desarrollo-web',
                component: ComponentCreator('/documentos2024/docs/category/desarrollo-web', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/docker',
                component: ComponentCreator('/documentos2024/docs/category/docker', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/estilos',
                component: ComponentCreator('/documentos2024/docs/category/estilos', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/google-chrome',
                component: ComponentCreator('/documentos2024/docs/category/google-chrome', '244'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/jquery',
                component: ComponentCreator('/documentos2024/docs/category/jquery', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/laravel',
                component: ComponentCreator('/documentos2024/docs/category/laravel', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/otros',
                component: ComponentCreator('/documentos2024/docs/category/otros', 'c67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/proyectos-laravel',
                component: ComponentCreator('/documentos2024/docs/category/proyectos-laravel', '85b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/pruebas',
                component: ComponentCreator('/documentos2024/docs/category/pruebas', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/react',
                component: ComponentCreator('/documentos2024/docs/category/react', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/tutorial---basics',
                component: ComponentCreator('/documentos2024/docs/category/tutorial---basics', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/tutorial---extras',
                component: ComponentCreator('/documentos2024/docs/category/tutorial---extras', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/tutorial-docusaurus',
                component: ComponentCreator('/documentos2024/docs/category/tutorial-docusaurus', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/vsc',
                component: ComponentCreator('/documentos2024/docs/category/vsc', 'ce5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/category/vue',
                component: ComponentCreator('/documentos2024/docs/category/vue', '83d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentos2024/docs/intro',
                component: ComponentCreator('/documentos2024/docs/intro', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/documentos2024/',
    component: ComponentCreator('/documentos2024/', '230'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
