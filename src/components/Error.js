import React from 'react';


class Error extends React.Component{
    
    render(){
        const mystyle = {
           position:"absolute",
            top:"40%",
            left:"40%",
            color:"white"
        };
        return(
            <h1 style={mystyle}>OOPS! Check URL</h1>
        )
        
    }
    
}
export default Error;