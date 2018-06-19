import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const showSlide = ({foreign_slide}) => {

    
    if(foreign_slide){
        
       return foreign_slide.map((side,index) => {
           //console.log(side.source.id)
           const style = {
            background:`url(${side.urlToImage})`
        }
           return(
               <Link to={`/foreign-news/${side.id}`} key={side.id} className="item">
                    <div>
                    <div 
                        className="image_cover"
                        style={style}>
                        <div className="description">
                            <span>{side.source.name}</span>
                        </div>
                    </div>
                    <div className="title">
                        {side.title}
                    </div>
                    </div>
               </Link>
           )           
       })
    }else{
        console.log('no fo')
    }
    

}

 const ForeignSlideNews = (props) => {
    console.log(props);
   
    
    return (
        <div className="home-slide">
                 {showSlide(props)}
         </div>
    )
 
}
export default ForeignSlideNews;
