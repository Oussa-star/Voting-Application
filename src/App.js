import React, {Component} from 'react';
import { voteAngular, voteReact, voteVuejs } from './components/actions/Action';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
     this.store = this.props.store
   }

   handleVoteAngular = () => {
    this.store.dispatch(voteAngular())
   }

   handleVoteReact = () => {
    this.store.dispatch(voteReact())
   }

   handleVoteVueJs = () => {
    this.store.dispatch(voteVuejs())
   }

  
  render() {
    return (
    <div>
    <div className='juumb'>
    <div className="jumbotron" style={{'textAlign': 'center', 'border' : '2px solid black'}}>
          <img src="download.jpg" height="96" alt=""></img>
          <h2 className='f1'>What is your favorite front-end development framework 2020?</h2>
          <h4 className='f3'>Click on the logos below to vote!</h4>
          <br />
          </div>
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
            <div className='br3 grow shadow-2 center pointer'>
              <img onClick={this.handleVoteAngular} src="angular.png" height="96" alt="Angular"></img>
              <img onClick={this.handleVoteReact} src="react.png" height="96" alt="React"></img>
              <img onClick={this.handleVoteVueJs} src="vuejs.png" height="96" alt="Vue.js"></img>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
  }
}

export default App;
