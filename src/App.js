import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Dimmer, Loader } from 'semantic-ui-react'
import firebase from './firebase'
import LinkComponent from './LinkComponent'
import VideoComponent from './VideoComponent'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      linkData: [

      ],
        videoData: [

        ]
    }
  }

  componentWillMount() {
    firebase.database().ref('/faglenker/').once('value')
      .then(snapshot => {
        let arr = firebase.toArray(snapshot);
        this.setState({ linkData: arr });
      })
      firebase.database().ref('/fagvideoer/').once('value')
          .then(snapshot => {
              let arr = firebase.toArray(snapshot);
              this.setState({ videoData: arr, loading: false});
          })
  }

  splitLinkData() {
    let half_length = Math.ceil(this.state.linkData.length / 2);

    let leftSide = this.state.linkData.slice(0, half_length);
    let rightSide = this.state.linkData.slice(half_length, this.state.linkData.length);

    return { leftSide, rightSide };
  }

    splitVideoData() {
        let half_length = Math.ceil(this.state.videoData.length / 2);

        let leftSide = this.state.videoData.slice(0, half_length);
        let rightSide = this.state.videoData.slice(half_length, this.state.videoData.length);

        return { leftSide, rightSide };
    }

  render() {
    const linkArrays = this.splitLinkData();
    const videoArrays = this.splitVideoData();
    const leftColumnLinks = linkArrays.leftSide.map(link =>
        <LinkComponent
            key={link.key}
            title={link.title}
            description={link.description}
            url={link.url}
        />
    );
    const rightColumnLinks = linkArrays.rightSide.map(link =>
        <LinkComponent
            key={link.key}
            title={link.title}
            description={link.description}
            url={link.url}
        />
    );

    const leftColumnVideos = videoArrays.leftSide.map(video =>
      <VideoComponent
          key={video.key}
          title={video.title}
          description={video.description}
          url={video.url}
      />
    );
      const rightColumnVideos = videoArrays.rightSide.map(video =>
          <VideoComponent
              key={video.key}
              title={video.title}
              description={video.description}
              url={video.url}
          />
      )
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              React Native Ressurser
            </Menu.Item>
          </Container>
        </Menu>
          {this.state.loading ?
              <Dimmer active>
                  <Loader/>
              </Dimmer>
              :
              <Container text style={{marginTop: '7em'}}>
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
                  <Grid columns={2} divided>
                      <Grid.Row>
                          <Grid.Column>
                              {leftColumnVideos}
                          </Grid.Column>
                          <Grid.Column>
                              {rightColumnVideos}
                          </Grid.Column>

                      </Grid.Row>
                  </Grid>
              </Container>
          }
      </div>
    )
  }
}
