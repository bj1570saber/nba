import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = value => {
        console.log(nba.searchPlayers(value));
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) => (
                    <Option key={playerId} >
                        <img
                            className="player-option-image"
                            src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                            alt={fullName}
                        />
                        <span className = "player-option-label">{fullName}</span>
                        
                    </Option>
                )
            )
        });
    };

    onSelect = (value) => {
        console.log('onSelect', value);
    }

    render() {
        const {dataSource} = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className="search-bar"
                size="large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search" />} />
            </AutoComplete>
        );
    }
}