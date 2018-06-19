import React, { Component } from 'react';
import { connect } from 'react-redux'
import { lastestNews,otherNews,galleryNews,slideNews } from '../actions'
import { bindActionCreators } from 'redux'

//component
import LatestNews from '../components/home/latest'
import SlideNews from '../components/home/slide-news'
import OtherNews from '../components/home/otherNews'
import GalleryNews from '../components/home/galleryNews'

class Home extends Component {
 componentDidMount(){
    this.props.lastestNews()
    this.props.otherNews()
    this.props.galleryNews()
    this.props.slideNews()
    }
  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest}/>
        <SlideNews slide={this.props.articles.slide}/>
        <OtherNews otherNews={this.props.articles.other}/>
        <GalleryNews galleryNews={this.props.gallery.galleryNews}/>
      </div>
    )
  }
}

function mapStateToprops(state){
    console.log(state);
    
    return{
        articles:state.articles,
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({lastestNews,otherNews,galleryNews,slideNews}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(Home) 