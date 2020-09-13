import React from 'react';
import ExerciseList from '../ExerciseList/ExerciseList';
import './WorkOutResults.css';

class WorkOutResults extends React.Component{
    render(){
        return (
            <div className="WorkOutResults">
                <h2 className="WorkOutResults-Title">Results</h2>
                <ExerciseList workOuts={this.props.workOutResults}
                              onAdd={this.props.onAdd}
                              isRemoval={false}/>
            </div>
        );
    }
}

export default WorkOutResults;