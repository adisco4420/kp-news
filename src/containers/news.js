import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedNews , clearSelectedNews } from '../actions'
import { bindActionCreators } from 'redux'

//counter

import LikesCounter  from './likes-counter'



class News extends Component{

    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id )
    }
    componentWillMount(){
        this.props.clearSelectedNews()
    }

    renderNews = ({selected}) =>{
        if(selected){
            return selected.map((item) =>{
                return(
                    <div key={item.id}>
                        {/* <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div> */}
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>
                                Article by:<strong>{item.author}</strong>
                            </span>
                        </div>
                        <img alt={item.title} src={`${item.urlToImage}`} />
                        <div className="body_news">
                            {item.description}
                            <br />
                            <span><a href={item.url} className="link-desc" target="_blank" >Read More</a> </span>
                        </div>
                        
                        <div>
                           
                        </div>
                    </div>
                )
            })
        }

    }

    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    
    return{
        articles:state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedNews, clearSelectedNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(News)