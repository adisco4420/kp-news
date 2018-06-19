import React from 'react'
import { Link } from 'react-router-dom'

const showClub = ({schArticle}) =>{
    console.log(schArticle);
    if(schArticle){
      return schArticle.map((articles,index) =>{
          const style = {
              background: `url(/images/schArticle/${articles.imageUrl})`
          }
            return(
                
                
                   <div key={index}>
                      <Link to="/kpnews" className="item">
                                        
                                    <div className="left" style={style}  ></div>
                                    
                                     <div className="right">
                                    <h2>{articles.article}</h2>
                                    <div className="category-tag">
                                        {articles.author}
                                        </div>
                                </div>
                      </Link>
                    </div>
               
            )
        })
    }

}

const SchArticle = (props) =>{
    
    return(
        <div className="other-news">    
            <h1>NEWS</h1>
            <div className="other-news-items">   
                  {showClub(props)}
            </div>
        </div>
    )
}


export default SchArticle;