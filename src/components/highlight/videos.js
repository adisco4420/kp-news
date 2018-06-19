import React from 'react'


const showVideo = ({video}) => {
    console.log(video);
    if(video){
        return video.map((vid) =>{
            const style ={
                width:560,
                height:315,
                frameborder:0,
                allow:"autoplay; encrypted-media"
            }
            return(
                <div key={vid.id} className="video">
                    <iframe style={style} className="video-item"  src={vid.url}   allowFullScreen>
                    </iframe>
                    <h4 className="video-title">{vid.title}</h4>
                </div>
            )
        })
    }

    
  
}
 const Videos = (props) => {
    
    return (
        <div className="highlight-videos">
            {showVideo(props)}
        </div>
      )
 
}
export default Videos;
