import React from 'react';



class TeamCard extends React.Component{
    
     constructor(props) 
    {
        super(props);
    
    }
    
    
    render(){
        
        return(
         <div className="col-lg-3 col-lg-offset-0 col-md-3 col-sm-5 col-xs-10" id="team-card">
            <h4 className="text-left team-card-title">{this.props.name}</h4>
            <p>Tasks:{this.props.pending}/ {this.props.total} </p><span class="label label-primary">Current Progress </span>
            <div className="progress">
                <div className="progress-bar progress-bar-info" aria-valuenow="{this.props.pending}" aria-valuemin="0" aria-valuemax="{this.props.pending}" style={{width: "90%"}}>90%</div>
            </div>
        </div>
        )
        
    }
    
}

export default TeamCard;