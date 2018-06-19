import React, { Component } from 'react';
import { connect } from 'react-redux'
import { foreign_lastestNews,foreign_otherNews,foreign_slideNews } from '../actions'
import { bindActionCreators } from 'redux'

//component
import ForeignLatestNews from '../components/foreign/latest'
import ForeignSlideNews from '../components/foreign/slide-news'
import ForeignOtherNews from '../components/foreign/otherNews'


class Foreign extends Component {
 componentDidMount(){
    this.props.foreign_lastestNews()
    this.props.foreign_otherNews()
    this.props.foreign_slideNews()
    }
  render() {
    return (
      <div>
        <ForeignLatestNews foreign_latest={this.props.foreign.foreign_latest}/>
        <ForeignSlideNews foreign_slide={this.props.foreign.foreign_slide}/>
        <ForeignOtherNews foreign_otherNews={this.props.foreign.foreign_other}/>

      </div>
    )
  }
}

function mapStateToprops(state){
    console.log(state);
    
    return{
        foreign:state.foreign,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({foreign_lastestNews,foreign_otherNews,foreign_slideNews}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(Foreign) 