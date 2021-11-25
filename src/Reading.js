import React from "react";
import HabitsService from "./HabitsService";


export default class Reading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        HabitsService.getReadingData().then(e => {
            this.setState({data: e});
            console.log(this.state.data)
        })
    }

    render() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return <div>
            <table>
                <tbody>
                {Object.keys(this.state.data).map((key, index) => <tr
                    key={index}>
                    <td>{new Date(key).toLocaleDateString("en-us", options)}</td>
                    <td>{this.state.data[key]}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    }
}
