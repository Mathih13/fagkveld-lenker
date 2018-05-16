import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

export default class LinkComponent extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            Linkname
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='link' />
            Klikk her
          </a>
        </Card.Content>
      </Card>
    );
  }
}

