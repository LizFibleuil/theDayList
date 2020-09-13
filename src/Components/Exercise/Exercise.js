import React from 'react';
import './Exercise.css';

class Exercise extends React.Component {
    constructor(props){
        super(props);
        this.addExercise = this.addExercise.bind(this);
        this.removeExercise = this.removeExercise.bind(this);
    }
 
    //This method executes the method created in App.js (addExercise(exercise)) into this component. It is brought here because this is where the button to add the actual exercise is located. This method is then added to the button found in the renderAction method. 
    addExercise(){
        console.log('addExercise');
        this.props.onAdd(this.props.workOutInfo)
    }
    //This method executes the method created in App.js (removeExercise(exercise)) into this component. It is brought here because this is where the button to remove the actual exercise is located. This method is then added to the button found in the renderAction method. 
    removeExercise(){
        this.props.onRemove(this.props.workOutInfo);
    }

    renderAction(){
        if(this.props.isRemoval){
            return <button className='Exercise-action' onClick={this.removeExercise}>-</button>;
        }
        else{
            return <button className='Exercise-action' onClick={this.addExercise}>+</button>;
        }
    }
    render(){
        return (
            <div className="Exercise">
                <div className="Exercise-information">
                    <h3>{this.props.workOutInfo.workout}</h3>
                    <p>{this.props.workOutInfo.reps} reps | {this.props.workOutInfo.weights} weights | {this.props.workOutInfo.time} mins</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default Exercise;