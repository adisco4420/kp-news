import React, { Component } from 'react';
import { connect } from 'react-redux'
import { worldNews,schArticle } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Football from '../components/world/football'
import SchArticle from '../components/world/sch-article'

class World extends Component {
 componentDidMount(){
     this.props.worldNews()
     this.props.schArticle()
    

    }
  render() {
    return (
      <div>
        <Football football={this.props.world.football} />
        <SchArticle schArticle={this.props.world.schArticle} />
      </div>
    )
  }
}

function mapStateToprops(state){
    console.log(state);
    
    return{
        world:state.world
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({worldNews,schArticle}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(World) 