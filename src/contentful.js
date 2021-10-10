import * as contentful from 'contentful'

const client = contentful.createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN
});

export default client