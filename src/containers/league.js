import React, { Component } from 'react';
import { connect } from 'react-redux'
import { table, club } from '../actions'
import { bindActionCreators } from 'redux'

//component
import Table from '../components/league/table'
import Clubs from '../components/league/clubs'


class League extends Component {
 componentDidMount(){
     this.props.table()
     this.props.club()

    }
  render() {
    return (
      <div>
        <Table table={this.props.league.table}/>
        <Clubs club={this.props.league.club}/>
      </div>
    )
  }
}

function mapStateToprops(state){
    console.log(state);
    
    return{
        league:state.league
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({table, club}, dispatch)
}

export default connect(mapStateToprops,mapDispatchToProps)(League) 