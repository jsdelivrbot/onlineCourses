import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBOY64lvpSYm3PrUvphpw04kgraKPZeehg';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: undefined,
    }

    this.doYTSearch('doggy')
    // this.doYTSearch = this.doYTSearch.bind(this);

  }

  doYTSearch(input) {
    YTSearch({ key: YOUTUBE_API_KEY, term: input }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  

	render() {
    // console.log('video', this.state.videos);

    const doYTSearch = _.debounce((input) => {this.doYTSearch(input)}, 1000)
		return (
			<div>
				<h1>hello</h1>
        <SearchBar doYTSearch={doYTSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          handleVideoClick={selectedVideo => this.setState({ selectedVideo })}
        />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
