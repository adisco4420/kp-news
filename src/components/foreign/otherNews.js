import React from 'react'
import { Link } from 'react-router-dom'

const renderOtherNews = ({foreign_otherNews}) =>{
    if(foreign_otherNews){
        return foreign_otherNews.map((item) =>{
            const style = {
                background:`url(${item.urlToImage})`
            }
            return(
                <Link to={`/foreign-news/${item.id}`} key={item.id} className="item">
                    <div className="left" style={style}></div>
                    <div className="right">
                        <h3>{item.title}</h3>
                        <div className="category-tag">{item.source.name}</div>
                        {/* <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>

                        </div> */}
                    </div>
                    
                </Link>
            )
        })
    }else{
        console.log('network not found  ')
    }
}

const ForeignOtherNews = (props) =>{
    console.log(props);
    
    return(
        <div className="other-news">
            <h2>Other News</h2>
           <div className="other-news-items">
                 {renderOtherNews(props)}
            </div>
        </div>
    )
}

export default ForeignOtherNews;