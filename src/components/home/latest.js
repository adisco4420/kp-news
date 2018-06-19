import React from 'react'
import { Link } from 'react-router-dom'

const showlatest = ({latest}) =>{
    if(latest){
        return latest.map((item) =>{
            const style = {
                background:`url(${item.urlToImage})`
            }
            return(
                 <Link to={`/news/${item.id}`} key={item.id} className="item">
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
        return(
            <div>
                latest not found
            </div>
        )
        
    }
}

const LatestNews = (props) =>{
    console.log(props);
    
    return(
        <div className="home-latest">
            {showlatest(props)}
        </div>
    )
}

export default LatestNews;