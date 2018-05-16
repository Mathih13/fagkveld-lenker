import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

export default class VideoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: 1000 }}>
                <Card.Content>
                    <Card.Header>
                        {this.props.title}
                    </Card.Header>
                    <Card.Description>
                        <iframe id="ytplayer" type="text/html" height="250"
                                src={ "https://www.youtube.com/embed/" + this.props.url + "?autoplay=0"}
                                frameBorder="0"
                                allowFullScreen="allowfullscreen"

                        />
                        {this.props.description}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

