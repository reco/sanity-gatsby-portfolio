export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62449ef83e51360834f490ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5f488yz4',
                  apiId: 'deaef655-6af0-4386-b7b6-d476c6ac545b'
                },
                {
                  buildHookId: '62449ef919027413e6cd3c4d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ftfv127f',
                  apiId: '9427fbac-1797-4002-a4bb-2b0bbd90608b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/reco/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ftfv127f.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
