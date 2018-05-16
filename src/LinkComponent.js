import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

export default class LinkComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
              {this.props.title}
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
              {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={this.props.url} target="_blank">
            Klikk her
          </a>
        </Card.Content>
      </Card>
    );
  }
}

