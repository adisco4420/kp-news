import React, { Component } from 'react';
import { connect } from 'react-redux'
import { videos } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Videos from '../components/highlight/videos'


class HighLight extends Component {
 componentDidMount(){
   this.props.videos()

    }
  render() {
    return (
      <div>
        <Videos video={this.props.highlight.video} />
      </div>
    )
  }
}

function mapStateToprops(state){
    console.log(state);
    
    return{
        highlight:state.highlight
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {videos},dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(HighLight) 