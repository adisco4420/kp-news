import React from 'react'


const showResultFixture = () =>{
    return(
        <div>
            <h1>RESULT AND FIXTURE </h1>
            
        </div>
    )
}

const showTable = ({table}) => {
    console.log(table);
    if(table){
      
        
        return table.map((tab,index) => {
            const matches = tab.Last5Matches
           
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
                                        {tab.D}
                                    </td>
                                    <td>
                                        {tab.L}
                                    </td>
                                    <td>
                                        {tab.F}
                                    </td>
                                    <td>
                                        {tab.A}
                                    </td>
                                    <td>
                                        {tab.D}
                                    </td>
                                    <td>
                                        {tab.P}
                                    </td>
                                    <td className="matches">
                                        {tab.Last5Matches}
                                    </td>
                                </tr>
                        </tbody>

                
            )
        
        })
    }
}
 const Table = (props) => {
    
    return (
        <div className="league-table">
            <h1>LEAUGE TABLE</h1>
              <table>
                       <thead>
                            <tr>   
                                <th>#</th>       
                                <th>Teams</th>
                                <th> MP </th>
                                <th>  W </th>  
                                <th>  D </th>   
                                <th>  L </th>
                                <th>  F </th>  
                                <th>  A </th>
                                <th>  D </th>       
                                <th>  P </th>
                                <th>  Last 5 matches </th>         
                            </tr>
                        </thead>

                  
                  {showTable(props)}
                    </table>


                     {showResultFixture()}
                
         </div>
    )
 
}
export default Table;
