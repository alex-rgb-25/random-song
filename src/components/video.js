import React from 'react';
import Lyrics from './lyrics';
import classes from './video.module.css';

class Video extends React.Component{
    constructor(props){
        super(props);


        this.state={
            visibility: true
        }
    }


render(){
    const arr = [{
        author: 'Lana Del Rey',
        name: 'Never Let Me Go',
        linkk: 'tDX_XmdccHY'
    },

    {
        author: 'ZAYN ft. Sia',
        name: 'Dusk Till Dawn',
        linkk: 'tt2k8PGm-TI'
        
    },


    {
        author: 'James Young',
        name: 'Infinity',
        linkk: 'PWqEPKduGm8'
        
    },

    {
        author: 'Jp Saxe ft. Julia Michaels',
        name: 'If The World Was Ending',
        linkk: '1jO2wSpAoxA'
    },

    {
        author: 'Lewis Capaldi',
        name: 'Someone You Loved',
        linkk: 'zABLecsR5UE'
    },

    {
        author: 'The Young Professionals',
        name: 'Video Games',
        linkk: 'sexPTYJ4fbo'
    },

    {
        author: 'James Young',
        name: 'Happiest Year',
        linkk: 'v9GLAUWJNG0'
    },

    {
        author: 'TONES AND I',
        name: 'DANCE MONKEY',
        linkk: 'q0hyYWKXF0Q'
    },

    {
        author: 'Pascal Letoublon',
        name: 'Friendships',
        linkk: '5rmb7WhmW30'
    },


    {
        author: 'Christina Perri',
        name: 'Human',
        linkk: 'r5yaoMjaAmE'
    },

    {
        author: 'James Bay',
        name: 'Let It Go',
        linkk: 'GsPq9mzFNGY'
    },


    {
        author: 'Alec Benjamin',
        name: 'The Water Fountain',
        linkk: '5ado75KpV9w'
    },

    {
        author: 'LP',
        name: 'Lost On You',
        linkk: 'hn3wJ1_1Zsg'
    },


    {
        author: 'Frames',
        name: "Don't Stay Here",
        linkk: '1knh-_SYrfQ'
    },

];

var srcc=`https://www.youtube.com/embed/${arr[this.props.num].linkk}?playsinline=1`;






var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return '#'+red+green+blue;
  };

  const xssw = fullColorHex(Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), Math.floor(Math.random() * 250)); 

  const style = {
    color: xssw
}




console.log(xssw)
    return(
        
        <div>
            
        <div className={'row'}>
            
            <div className={`col`}>
                
                <div className={classes.videoContainer}>
                <iframe width="560" height="315" src={srcc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>


            <h2 style={style}>{arr[this.props.num].author} - {arr[this.props.num].name}</h2>
             
            </div>
            

            <div className={`col`}>
            
            <Lyrics num={this.props.num}/>
            
            </div>
        </div>
        
        </div>

    );
}




}

export default Video;