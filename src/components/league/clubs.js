import React from 'react'


const showClub = ({club}) =>{
    console.log(club);
    if(club){
        return club.map((cub) =>{
            return(
                <div className="club-list" key={cub.id}>
                    <a href={cub.url} target="_blank"><img src={cub.imageUrl} alt={cub.clubName} />
                    <h3>{cub.clubName}</h3></a>
                </div>
            )
        })
    }
}

const Clubs = (props) =>{
    
    return(
        <div className="clubs">
            <h1> CLUBS 2017/2018 </h1>
            {showClub(props)}
        </div>
    )
}


export default Clubs;