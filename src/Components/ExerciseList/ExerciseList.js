import React from 'react';
import './ExerciseList.css';
import Exercise from '../Exercise/Exercise';

class ExerciseList extends React.Component {
    render(){
        return (
            <div className="ExerciseList">
                {this.props.workOuts.map(workOut => <Exercise workOutInfo={workOut} 
                                                              key={workOut.id}
                                                              onAdd={this.props.onAdd}
                                                              onRemove={this.props.onRemove}
                                                              isRemoval={this.props.isRemoval}/>)}
                                                             
            </div>
        );
    }
}

export default ExerciseList;