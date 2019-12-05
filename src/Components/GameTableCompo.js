/**
 * @author : M. Le Thiec
 * @date : 04/12/2019
 */

import React, {Component} from 'react';
import GameCategory from './GameCategory';
import GameRow from './GameRow';


class GameTableCompo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                GameTableCompo
                <GameCategory/>
                <GameRow/>
            </div>
        );
    }
}

export default GameTableCompo;