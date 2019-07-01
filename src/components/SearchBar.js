import React from 'react';
import {AutoComplete, Input, Icon} from 'antd';

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    };

    handleSearch = value => {
        this.setState({
            dataSource: !value ? [] : [value, value + value, value + value + value],
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
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        );
    }
}