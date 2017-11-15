import  { ApolloClient } from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'http://localhost:60000/simple/v1/cja16zxkj000401310f0drgxh' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache
})

export default client