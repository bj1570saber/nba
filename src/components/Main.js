import React from 'react';
import {ShotChart} from './ShotChart';
import {Profile} from './Profile'
import nba from 'nba';

export class Main extends React.Component{
    state = {
        playerId: 201939,
        playerInfo: {},
    }

    componentDidMount(){
        nba.stats.playerInfo({PlayerID: this.state.playerId})
            .then((info) =>{
                const playerInfo = Object.assign({}, 
                    info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log("final player info", playerInfo);
                this.setState({playerInfo});
            })
            .catch((e) =>{
                console.log(e);
            });
    }

    render(){
        return(
            <div className = "main">
                <Profile playerInfo = {this.state.playerInfo}/>
                <ShotChart playerId = {201939}/>
            </div>
        );
    }
}