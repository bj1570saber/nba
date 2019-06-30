import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

export class DataViewContainer extends React.Component{
    state = {
        minCount: 2,

    }

    handleCountSliderChange = (count) => {
        this.setState({minCount: count});
    }

    render(){
        return(
            <div className= "data-view">
                <ShotChart playerId= {this.props.playerId} minCount = {this.state.minCount}/>
                <div className="filters">
                    <CountSlider handleCountSliderChange = {this.handleCountSliderChange}/>
                </div>
            </div>
    
        )
    }
}