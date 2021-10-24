import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import CovidPage from './CovidPage';
import AllVideoPage from './AllVideoPage';
import '../style/App1.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
          
        this.state = {
            videos: [],
            selectedVideo: null
        }
     }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div style={{marginTop:'1em'}}>
    <BrowserRouter>
        <nav>
          <ul class ="ui secondary pointing menu">
          <li><h1>HCM</h1></li>
            <li ><Link to={{pathname :"/covid",
                                             data:this.state}}>Covid Videos</Link></li>
            <li ><Link to={{pathname :"/all",
                                             data:this.state}}>AllVideo</Link></li>
            <li><Link to="/search"><SearchBar handleFormSubmit={this.handleSubmit}/></Link></li>
            <li><h2>Test User</h2></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/covid">
            <CovidPage onLoad={this.handleSubmit} />
            <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
          </Route>
          <Route path="/all">
            <AllVideoPage onLoad={this.handleSubmit} />
            <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
          </Route>
          <Route path="/search">
             <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
          </Route>
        </Switch>
      </BrowserRouter>    
                
    </div>
        )
    }
}

export default App;