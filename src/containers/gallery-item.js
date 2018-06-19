import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedGallery , clearSelectedGallery } from '../actions'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'

//counter
import LikesCounter  from './likes-counter'

const settings = {
    dots:false,
    inifinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1

}

class GalleryItem extends Component{

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }
    componentWillMount(){
        this.props.clearSelectedGallery()
    }

    renderSlider = ({selected}) =>{

        if(selected){
            const gal = selected[0]
            return selected.map((item) =>{
                return(
                    <div key={gal.id}>
                        <h3 key={gal.id}>The best of {gal.artist}</h3>
                        <Slider {...settings}>
                            {gal.images.map((img,index) =>{
                                const styles ={
                                    background:`url(/images/galleries/${img.img})`
                                }
                                return(
                                    <div key={index} className="slide-item">
                                        <div>
                                            <div style={styles} className="image"></div>
                                            <div className="description">
                                                <span>{img.desc}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </Slider>

                         <div>
                            <LikesCounter articleId={item.id} 
                                        section="galleries"
                                        type="HANDLE_LIKES_GALLERY"
                                        likes={item.likes[0]} 
                                        dislikes={item.likes[1]}/>
                        </div>
                        
                    </div>
                )
            })
        }

    }

    render(){

        const item = this.props

        return(
            <div className="slide-item-wrap">
                {this.renderSlider(item.gallery)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    
    return{
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGallery, clearSelectedGallery},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryItem)