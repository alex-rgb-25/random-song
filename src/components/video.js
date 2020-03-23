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
        name: 'Venice Bitch',
        linkk: 'Qg3DxELVPj4'
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

    {
        author: 'Ashe',
        name: "Moral of the Story",
        linkk: 'WQq98YPV8yk'
    },

    {
        author: 'Lana Del Rey',
        name: 'Mariners Apartment Complex',
        linkk: '1uFv9Ts7Sdw'
    },

    

];

var srcc=`https://www.youtube.com/embed/${arr[this.props.num].linkk}?playsinline=1`;
var srcc3=`https://www.youtube.com/watch?v=${arr[this.props.num].linkk}`;

var srcc2=`https://twitter.com/intent/tweet?hashtags=youtube&related=freecodecamp&text=${srcc3}`;



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
    color: xssw,
    fontSize:'27px',
    fontFamily: '"Shadows Into Light", cursive',
}




console.log(xssw)
    return(
        
        <div>
            
        <div className={'row'}>
            
            <div className={`col-7`}>


                <div >

                <h4 style={style}>{arr[this.props.num].author} - {arr[this.props.num].name}</h4>
                <div className={classes.videoContainer}>
                <iframe style={brd}  src={srcc} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

                
                </iframe>
                </div>
               

            

            </div>



             <a target="_blank" style={{fontSize:'20px', float:'left',paddingLeft:'30px'}} href ={srcc2} >Share on <i class="fab fa-twitter"></i></a>
             <br></br>
                <hr />
             <div>
                <h5 style={{display:'inline',color:'#091A26',marginTop:'10px'}}>By </h5>
                <img style={{width:'20%', weight:'20%'}}src="signature.jpg" />
            </div>
            </div>
            


            <div className={`col-5`}>
            
            <Lyrics num={this.props.num}/>
            
            </div>
        </div>
        
        </div>

    );
}




}





const brd= {
    border: '14px double #091A26',
    borderRadius: '5px 40% 5px 5px',
    marginLeft:'7px',

}



export default Video;