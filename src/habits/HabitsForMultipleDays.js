import React from "react";
import RESTService from "../RESTService";
import "./HabitsForMultipleDays.css"
import {CardTable} from "./CardTable";
import moment from "moment";
import {CardTableDate, CardTableItem} from "./CardTableItem";


const Header = (props) => {
    return <div className="flex-habits">
        <CardTableItem/>
        {props.keys.map(e => <CardTableItem
            name={e} show_name={true}
            edit={false}/>)}
        <CardTableItem/></div>
}

export default class HabitsForMultipleDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new Map(), streaks: [],
        }
    }

    componentDidMount() {
        let endDate = new Date().toISOString().split('T')[0]
        RESTService.getDataForMultipleDays("2022-02-27", endDate).then(e => {
            this.setState({data: e});
            console.log(e);
        });
    }

    render() {
        let keys = [];
        if (Object.keys(this.state.data).length > 2) {
            let keys_temp = Object.keys(this.state.data);
            keys = Object.keys(this.state.data[keys_temp[23]])
        }
        return <div>
            <Header keys={keys}/>
            {Object.keys(this.state.data).map(e => <div className='flex-habits'>
                <CardTableDate name={moment(e).format('ddd, D MMMM')}/>
                {keys.map(k =>
                    <CardTable name={k} value={this.state.data[e][k]}/>)}
                <CardTableItem name={"-"} show_name={true}/>
            </div>)}
        </div>
    }
}
