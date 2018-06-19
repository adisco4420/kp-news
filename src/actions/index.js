const URL = 'https://news-api-56be7.firebaseio.com'

///// HOME-NEWS /////

export function lastestNews(){
    const request = fetch(`${URL}/articles?_order=desc&_end=5`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_LASTEST',
        payload:request
    }
}

export function otherNews(){
    const request = fetch(`${URL}/articles?_order=desc&_start=5&_end=17`,
                    {method:'GET'},
                    
                )
                    .then(res => res.json())
    return{
        type:'GET_OTHER',
        payload:request
    }
}

//////// NEWS_SLIDE ///////

export function slideNews(){
    const request = fetch(`${URL}/articles?_order=desc&_start=17&_end=25`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_SLIDE',
        payload:request
    }
}

///// FOREIGN-NEWS ////////

export function foreign_lastestNews(){
    const request = fetch(`${URL}/foreign?_order=desc&_end=5`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_FOREIGN_LASTEST',
        payload:request
    }
}

export function foreign_otherNews(){
    const request = fetch(`${URL}/foreign?_order=desc&_start=5&_end=17`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_FOREIGN_OTHER',
        payload:request
    }
}

//////// FOREIGN_NEWS_SLIDE ///////

export function foreign_slideNews(){
    const request = fetch(`${URL}/foreign?_order=desc&_start=16&_end=20`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_FOREIGN_SLIDE',
        payload:request
    }
}

//////// FOREIGN-NEWS-DETAIL ////////

export function FselectedNews(id){
    const request = fetch(`${URL}/foreign?id=${id}`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_FSELECTED_NEWS',
        payload:request
    }
}

export function  FclearSelectedNews(){
    return{
        type:'CLEAR_FSELECTED_NEWS',
        payload:[]
    }
}



//////// NEWS-DETAIL ////////

export function selectedNews(id){
    const request = fetch(`${URL}/articles?id=${id}`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_SELECTED_NEWS',
        payload:request
    }
}

export function  clearSelectedNews(){
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}

//////// HIGHLIGHT   ////////

export function videos(){
    const request = fetch(`${URL}/videos`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_VIDEOS',
        payload:request
    }
}


///// GALLERY /////
export function galleryNews(){
    const request = fetch(`${URL}/articles?_order=desc&_start=17&_end=20`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_GALLERY',
        payload:request
    }
}

///// GALLERY-DETAIL ////
export function selectedGallery(id){
    const request = fetch(`${URL}/articles?id=${id}`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_SELECTED_GALLERY',
        payload:request
    }
}

export function clearSelectedGallery(){
    return{
        type:'CLEAR_SELECTED_GALLERY',
        payload:[]
    }
}


//////// LEAGUE-TABLE  ////////
export function table(){
    const request = fetch(`${URL}/table`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_TABLE',
        payload:request
    }
}


//////// CLUBS  ////////

export function     club(){
    const request = fetch(`${URL}/clubs`,
                    {method:'GET'})
                    .then(res => res.json())
    return{
        type:'GET_CLUB',
        payload:request
    }
}
////// FORM-MESSAGES //////

export function getMessages(){
    const request = fetch(`${URL}/messages`,
            {
                method: 'GET'
            })
            .then(res => res.json())
    return {
        type:'GET_MESSAGES',
        payload:request
    }
}


export function addMessage(values){
    const request = fetch(`${URL}/messages`,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    }).then(
      
    )

    return {
        type:'ADD_MESSAGES',
        payload:request
    }

}

////// WORLD  ////////


export function worldNews(){
    const request = fetch(`${URL}/schTeams`,
                    {
                        method:'GET'
                    })
                    .then(res => res.json())
    return{
        type:'GET_WORLD',
        payload:request
    }
}

export function schArticle(){
    const request = fetch(`${URL}/schArticle`,
                    {
                        method:'GET'
                    })
                    .then(res => res.json())
    return{
        type:'GET_SCH_ARTICLE',
        payload:request
    }
}

////// ADD_LISKES ////////
export function handleLikes(array,id,section,type){
    const request = fetch(`${URL}/${section}/${id}`,
    {
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:array})
    })
    .then(res => res.json())
    return{
         type:type,
         payload:request
    }
}



