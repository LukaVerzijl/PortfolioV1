import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'lukaportfoliocms'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5aTy1Pa2hJQUFDRUFwYWpo.77-9Le-_vVAw77-9WQg177-977-977-9Hx0M77-9XTjvv73vv70sORVt77-9UGPvv73vv70_SRY',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'test',
      path: '/',
    },
  ],
})