import React from 'react';
import {ShotChart} from './ShotChart';
import {Profile} from './Profile';
import {DataViewContainer} from './DataViewContainer';
import nba from 'nba';
import {SearchBar} from './SearchBar';
import {DEFAULT_PLAYER_INFO} from '../constants';

export class Main extends React.Component {
    state = {
        isLoading: true,
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerId);
    }

    loadPlayerInfo = (playerId) => {
        this.setState({
            isLoading: true
        });
        //Given Player Name
        //Get Player ID from Player Name
        //Fire API to get player info
        //Set State
        nba.stats.playerInfo({PlayerID: playerId})
            .then((info) => {
                const playerInfo = Object.assign({},
                    info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log("final player info", playerInfo);
                this.setState({playerInfo, isLoading: false});
            })
            .catch((e) => {
                console.log(e);
                this.setState({isLoading: false});
            });
    }
    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo} />
                {
                    this.state.isLoading ? "Loading..." : (
                        <div className="player">
                            <Profile playerInfo={this.state.playerInfo} />
                            <DataViewContainer playerId={this.state.playerInfo.playerId} />
                        </div>
                    )
                }
            </div>
        );
    }
}