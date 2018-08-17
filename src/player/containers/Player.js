import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import Video from 'react-native-video'
import VideoLayout from '../components/VideoLayout'
import ControlLayout from '../components/ControlLayout'
import PlayPause from '../components/PlayPause'

export default class Player extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      paused: false
    }
  }

  _onBuffer = ({ isBuffering }) => this.setState({ loading: isBuffering })

  _onPressPlayPause = () => this.setState({ paused: !this.state.paused })

  render () {
    const { paused, loading } = this.state
    return (
      <VideoLayout
        video={
          <Video
            source={{uri: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"}} //https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4
            ref={(ref) => this.player = ref}
            resizeMode="contain"
            style={styles.video}
            //muted
            onBuffer={this._onBuffer}
            paused={paused}
          />
        }
        style={this.props.style}
        loader={<ActivityIndicator color='black'/>}
        loading={loading}
        controls={
          <ControlLayout>
            <PlayPause paused={paused} onPress={this._onPressPlayPause}/>
          </ControlLayout>
        }
      >
      </VideoLayout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
