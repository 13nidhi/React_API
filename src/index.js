import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    state = { lat : null, errorMessage: ''}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude}) , 
            err => this.setState({ errorMessage: err.message })
            
        );
    }

    componentDidUpdate() {
        console.log('My component was just Updated - it rerendered!');
    }
// i use renderContent because inseted of passing border on every condition we can pass in one div i will save time , and reusable also
    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
        {
            return <div>Error: {this.state.errorMessage}</div>
        }
       
        if(!this.state.errorMessage && this.state.lat)
        {
            return <div><SeasonDisplay lat={this.state.lat}/></div>
        }
        return <div><Spinner message="Please accept message request"/></div>
    }
    
    render() {
        return <div className="border red">{this.renderContent()}</div> 
}
};


ReactDom.render(
    <App/>,
    document.querySelector('#root')
);