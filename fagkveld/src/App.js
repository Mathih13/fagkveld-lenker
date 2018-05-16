import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import firebase from './firebase'
import LinkComponent from './LinkComponent'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      linkData: [

      ]
    }
  }

  componentWillMount() {
    firebase.database().ref('/faglenker/').once('value')
      .then(snapshot => {
        let postArray = firebase.toArray(snapshot);
        console.log(postArray)
      })
  }

  splitLinkData() {
    let half_length = Math.ceil(this.state.linkData.length / 2);

    let leftSide = this.state.linkData.slice(0, half_length);
    let rightSide = this.state.linkData.slice(half_length, this.state.linkData.length);

    return { leftSide, rightSide };
  }

  render() {
    const linkArrays = this.splitLinkData();
    const leftColumnLinks = linkArrays.leftSide.map(link => link);
    const rightColumnLinks = linkArrays.rightSide.map(link => link);
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              React Native Ressurser
            </Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Lenker</Header>

          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                {leftColumnLinks}
              </Grid.Column>
              <Grid.Column>
                {rightColumnLinks}
              </Grid.Column>

            </Grid.Row>
          </Grid>

          <Header as='h1'>Videoer</Header>
        </Container>
      </div>
    )
  }
}
