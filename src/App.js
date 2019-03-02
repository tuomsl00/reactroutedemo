import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const Contentstyle = React.createContext('App-user');

class App extends Component {

	Index() {
		return (
		<>
		<h2>Home</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</>
		);
	}
	
	About() {
		return (
		<>
		<h2>About</h2>
		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
		</>
		);
	}
	
	Users(id) {
	const Userstyle = "App-user"+id;
		return (
		<Contentstyle.Provider value={Userstyle}>
			<UserPage />
		</Contentstyle.Provider>
		);
	}

	
  render() {
    return (
	
    <Router>
	<>
      <div className="wrapper">
		<div className="App-banner"></div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users1/">Users1</Link>
            </li>
			<li>
              <Link to="/users2/">Users2</Link>
            </li>
          </ul>
        </nav>
		<div className="App-content">
        <Route path="/" exact component={this.Index} />
		<Route path="/about/" component={this.About} />
        <Route path="/users1/" component={() => this.Users(1)} />
        <Route path="/users2/" component={() => this.Users(2)} />
		</div>
		
      </div>
		<footer>
			footer
		</footer>
	</>
    </Router>

    );
  }
}

function UserPage() {
		return(
			<RenderUserPage />
		);
	}
	
class RenderUserPage extends React.Component {
	static contextType = Contentstyle;
	render() {
		return (
		<>
			<h2>Users</h2>
			<div className={this.context}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</div>
			<div className={this.context}>
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</>
		);
	}
}
	

export default App;
