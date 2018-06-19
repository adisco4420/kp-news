import React from 'react'


const showClub = ({football}) =>{
    console.log(football);
    if(football){
      return football.map((tab,index) =>{
            return(
                
                   
                   <tbody  key={index}>
                            <tr>
                                    <td>
                                        {tab.id}
                                    </td>
                                    <td>
                                        {tab.teamName}
                                    </td>
                                    <td>
                                        {tab.MP}
                                    </td>
                                    <td>
                                        {tab.W}
                                    </td>
                                    <td>
                                        {tab.L}
                                    </td>
                                    <td>
                                        {tab.D}
                                    </td>
                                    <td>
                                        {tab.F}
                                    </td>
                                    <td>
                                        {tab.A}
                                    </td>
                                    <td>
                                        {tab.GD}
                                    </td>
                                    <td>
                                        {tab.P}
                                    </td>
                              
                                </tr>
                        </tbody>
               
            )
        })
    }

}

const Clubs = (props) =>{
    
    return(
        <div className="league-table">
           <h1>Departmental Cup Computer Science 2018</h1>
           <table className="tb">
                       <thead>
                            <tr>   
                                <th>#</th>       
                                <th>Teams</th>
                                <th> MP </th>
                                <th>  W </th>  
                                <th>  L </th>   
                                <th>  D </th>
                                <th>  GF </th>  
                                <th>  GA </th>
                                <th>  GD </th>       
                                <th>  P </th>
                                     
                            </tr>
                        </thead>

                  
                  {showClub(props)}
                    </table>

                  <div>
                      <h1>FIXTURES AND RESULT</h1>
                             <table className="result-table"  >
                                 <thead >
                                     <h3>First Round Group A</h3>
                                     <tr>
                                        <th>Home</th>
                                        <th>Scores</th>
                                        <th>AWay</th>
                                     </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HND2</td>
                                        <td>2 - 2</td>
                                        <td>ND1A</td>
                                    </tr>
                                    <tr>
                                        <td>HND1</td>
                                        <td>1 - 1</td>
                                        <td>ND2yr3</td>
                                    </tr>
                                    <h3>Second Round Group A</h3>
                                    <tr>
                                        <td>HND2</td>
                                        <td>2 - 0</td>
                                        <td>ND2yr3</td>
                                    </tr>
                                    <tr>
                                        <td>HND1</td>
                                        <td>0 - 0</td>
                                        <td>ND1A</td>
                                    </tr>
                                    <h3>First Round Group B</h3>
                                     <tr>
                                        <td>ND2A</td>
                                        <td>2 - 0</td>
                                        <td>ND1C</td>
                                    </tr>
                                    <tr>
                                        <td>ND2B</td>
                                        <td>0 - 1</td>
                                        <td>ND1B</td>
                                    </tr>
                                    <h3>Second Round Group B</h3>
                                    <tr>
                                        <td>ND2A</td>
                                        <td>3 - 0</td>
                                        <td>ND1B</td>
                                    </tr>
                                    <tr>
                                        <td>ND2B</td>
                                        <td>1 - 0</td>
                                        <td>ND1C</td>
                                    </tr>
                                    
                                </tbody>
                             </table>
                    </div>

                    


        </div>
    )
}


export default Clubs;