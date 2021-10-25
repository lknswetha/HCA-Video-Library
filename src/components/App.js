import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import CovidPage from './CovidPage';
import AllVideoPage from './AllVideoPage';
import '../style/App1.css';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

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
            this.setState({selectedVideo: video}); 
    }

    handleVideoOnLoad = (video) => {
            this.setState({selectedVideo: this.state.videos[0]});
    }

    render() {
        return (
            <div style={{marginTop:'1em'}}>
    <BrowserRouter>
        <nav>
            <section style={{marginTop: "20px", color: "white"}}>
            HCA Video Library                    
            </section>
            <section>
                <div>
                <ul>
                <li ><Link to={{pathname :"/covid",
                                             data:this.state}}>Covid-19 Videos</Link></li>
            <li ><Link to={{pathname :"/all",
                                             data:this.state}}>All Videos</Link></li>
            <li><Link to="/search"><SearchBar handleFormSubmit={this.handleSubmit}/></Link></li>
                </ul>
                </div>
            </section>
            <div style={{marginTop: "22px", color: "white"}}>
                <span>HCA User</span>
            </div>
            </nav>
        <Switch>
          <Route path="/covid">
            <CovidPage onLoad={this.handleSubmit} />
          </Route>
          <Route path="/all">
            <AllVideoPage onLoad={this.handleSubmit} />
          </Route>
          <Route path="/search">
          </Route>
           <Route exact path="/" render={() => (
                <Redirect to="/covid"/>
            )}/>
        </Switch>
      </BrowserRouter>    
             <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} handleVideoOnLoad={this.handleVideoOnLoad}  videos={this.state.videos}/>
                        </div>
                    </div>
                </div>      
    </div>
        )
    }
}

export default App;
