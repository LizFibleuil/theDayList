import React from 'react';
import './RoutineList.css';
import ExerciseList from '../ExerciseList/ExerciseList';
import ReactToPrint from "react-to-print";

class RoutineList extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    render(){
        return (
            <div className="Routinelist">
                {/* The attribute ref defines that this div will be printed as a PDF once the button below is clicked */}
                <div className='Print-Style' ref={el => (this.componentRef = el)}>
                    <input value={this.props.routineName} onChange={this.handleNameChange}/>
                    <ExerciseList workOuts={this.props.routineExercises}
                                onRemove={this.props.onRemove}
                                isRemoval={true}/>
                    <p className="timeText">Total Routine Time is <span>{this.props.totalTime}</span> mins</p>
                </div>
                {/* This is a component that provides the ability to create PDFs from a defined content. The content has been defined above by placing the ref attribute to the content that we want to print */}
                <ReactToPrint
                    trigger={() => <button className="Routine-save">SAVE ROUTINE</button>}
                    content={() => this.componentRef}
                />           
                <button className="Routine-reset" onClick={this.props.onReset}>RESET</button>
            </div>
        );
    }
}

export default RoutineList;