/**
 * @author : M. Le Thiec
 * @date : 04/12/2019
 */

import React, {Component} from 'react';
import SearchCompo from './SearchCompo'
import GameTableCompo from './GameTableCompo';
import Datas from './Datas';

class FilterableGameTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : Datas()
        }
        console.log("Datas : ",this.state.datas);
    }

    render() {
        return(
            <div>
                FilterableGameTable
                <SearchCompo/>
                <GameTableCompo/>
            </div>
        );
    }
}

export default FilterableGameTable;