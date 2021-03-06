import React from 'react';
import Video from './video'
import classes from './header.module.css'
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
       return Math.floor(Math.random() * 28)
    }

    generateRand = () =>{
        console.log("pressed")
        this.generateNum();
        this.someMethod();
    }



    render(){
        return(
        
        <div id="quote-box" style={{marginTop:'40px'}}>
            <button style={{color:'#EAD3A8'}} id="new-quote" onClick={this.generateRand} className={`btn btn-outline-light`}>Random song</button>
            <div style={{borderBottom:'7px solid black', marginTop:'4px'}}></div>
        <div style={{marginTop:'40px'}}>
        </div>
        {this.state.display && <Video num={this.generateNum()}/> } </div>

        
        );
    }
}

export default Header;