import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import chainsService from './service'
import { GridList, GridTile } from 'material-ui'
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class ChainsList extends Component {
  render() {
    let chains = null

    if (this.props.data.loading){
      return <h1>loading chains...</h1>
    }

    if (this.props.data.allChains){
      chains = this.props.data.allChains
    }

    return(
      <div>
        <GridList>
          {chains.map((chain) => {
            return <GridTile
              // key={tile.img}
              title={chain.name}
              subtitle={<span>by <b>{chain.description}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              {/*<img src={tile.img} />*/}
            </GridTile>
          })}
        </GridList>
      </div>
    )
  }
}

const withAllChainsQuery = graphql(chainsService.allChains, {options: { fetchPolicy: 'network-only'}})(ChainsList)

export default withAllChainsQuery