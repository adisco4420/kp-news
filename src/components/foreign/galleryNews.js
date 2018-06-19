import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const settings = {
    dots:true,
    inifinite:true,
    speed:500,
    slidesToShow: 2,
    slidesToScroll: 1

}

const showGalleryrNews = ({galleryNews}) =>{
    // if(galleryNews){
    //     return(
    //         <Slider {...settings}>
    //             {galleryNews.map((item) =>{
    //                 const style = {
    //                     background:`url(${item.urlToImage})`
    //                 }
    //                 return(
    //                     <Link to={`/galleries/${item.id}`} 
    //                         className="slider-item" key={item.id}>
    //                         <div className="image" style={style}>
    //                             <h3>{item.title}</h3>
    //                         </div>
    //                     </Link>
    //                 )
    //             })}
    //         </Slider>
    //     )
    // }
  
}

const GalleryNews = (props) =>{
    console.log(props);
    
    return(
        <div className="home-gallery">
            {/* <h2>Awesome Gallery</h2> */}
                 {showGalleryrNews(props)}
        </div>
    )
}

export default GalleryNews;