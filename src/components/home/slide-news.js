import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const showSlide = ({slide}) => {

    
    if(slide){
        
       return slide.map((side,index) => {
           //console.log(side.source.id)
           const style = {
            background:`url(${side.urlToImage})`
        }
           return(
               <Link to={`/news/${side.id}`} key={side.id} className="item">
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
        return(
            <div>
                side news not found
            </div>
        )
    }
    

}

 const SlideNews = (props) => {
  
   
    
    return (
        <div className="home-slide">
                 {showSlide(props)}
         </div>
    )
 
}
export default SlideNews;
