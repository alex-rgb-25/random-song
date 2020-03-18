import React from 'react';
import Video from './video'
import Heart from './heart'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:true
        }
        this.generateRand=this.generateRand.bind(this);
        this.someMethod=this.someMethod.bind(this);
    }


    someMethod() {
        // Force a render without state change...
        this.forceUpdate();
    }

    generateNum = () =>{
       return Math.floor(Math.random() * 15)
    }

    generateRand = () =>{
        console.log("pressed")
        this.generateNum();
        this.someMethod();
    }



    render(){
        return(<div style={{marginTop:'40px'}}>
            <button onClick={this.generateRand} className={`btn btn-outline-secondary`}>Random song</button>
            <hr></hr>
        <div style={{marginTop:'40px'}}>
        {this.state.display && <Video num={this.generateNum()}/> } </div>
        </div>);
    }
}

export default Header;