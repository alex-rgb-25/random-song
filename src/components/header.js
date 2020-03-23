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
       return Math.floor(Math.random() * 16)
    }

    generateRand = () =>{
        console.log("pressed")
        this.generateNum();
        this.someMethod();
    }



    render(){
        return(<div style={{marginTop:'40px'}}>
            <button onClick={this.generateRand} className={`btn btn-outline-secondary`}>Random song</button>
            <div style={{borderBottom:'12px solid black', borderImage: "url('data:image/png;base64,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') 30 stretch"}}></div>
        <div style={{marginTop:'40px'}}>
        {this.state.display && <Video num={this.generateNum()}/> } </div>
        </div>);
    }
}

export default Header;