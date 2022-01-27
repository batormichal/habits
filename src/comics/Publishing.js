import React from 'react';
import RESTService from "../RESTService";
import './Publishing.css'
import PublicationTable from "./PublicationTable";


export default class Publishing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            publishing: {
                stories: [],
            }
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        RESTService.getComicsPublishing().then(e => {
            this.setState({publishing: e})
        });

    }

    render() {
        return <React.Fragment>
            <h1 className="display-6">{this.state.publishing.seriesName + ": " + this.state.publishing.title}</h1>
            <PublicationTable data={this.state.publishing.stories}
                              headers={["Kod", "Pozycja", "Tytuł", "Scenariusz", "Rysunki", "Stron"]}
                              keys={["code", "position", "title", "storyAuthor", "artAuthor", "pages"]}/>
        </React.Fragment>
    }

}
