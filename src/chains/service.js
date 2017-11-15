import gql from 'graphql-tag'

class ChainsService {
  allChains = gql`
    query {
      allChains{
        name
        description
      }
    }
  `
}

export default new ChainsService()