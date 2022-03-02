import React from 'react';
import RESTService from "../RESTService";
import {Link} from "react-router-dom";


export default class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            publications: [],
            show: ''
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        RESTService.getAllComicsPublications().then(e => {
            this.setState({publications: e})
        });

    }

    render() {
        return <React.Fragment>
            {this.state.publications.map(e =>
                <p><Link
                    to={"/comics/publication/" + e['id']}>{e['title']}</Link>
                </p>)}
        </React.Fragment>
    }

}
