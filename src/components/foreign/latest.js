import React from 'react'
import { Link } from 'react-router-dom'

const showlatest = ({foreign_latest}) =>{
    if(foreign_latest){
        return foreign_latest.map((item) =>{
            const style = {
                background:`url(${item.urlToImage})`
            }
            return(
                 <Link to={`/foreign-news/${item.id}`} key={item.id} className="item">
                    <div 
                        className="image_cover"
                        style={style}>
                        <div className="description">
                            <span>{item.source.name}</span>
                            <div>{item.title}</div>
                        </div>
                    </div>
                 </Link>
                 
            )
        })

    }else{
        console.log('network not found');
        
    }
}

const ForeignLatestNews = (props) =>{
    console.log(props);
    
    return(
        <div className="home-latest">
            {showlatest(props)}
        </div>
    )
}

export default ForeignLatestNews;