import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import WorkOutResults from '../WorkOutResults/WorkOutResults';
import RoutineList from '../RoutineList/RoutineList';
import legDay from '../DayLists/legDay';
import armDay from '../DayLists/armDay';
import coreDay from '../DayLists/coreDay';
import fullBodyDay from '../DayLists/fullBodyDay';

const dayType = {
  legDay,
  armDay,
  coreDay,
  fullBodyDay
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //These are the workout results that are shown once a type of workout day is selected
      workOutResults: [],
      routineName:'New Routine Name',
      //These are the workouts that are added to that days workout list
      routineExercises: [],
      totalTime: 0
    };
    this.addExercise = this.addExercise.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
    this.updateRoutineName = this.updateRoutineName.bind(this);
    this.resetRoutine = this.resetRoutine.bind(this);
    this.chooseDay = this.chooseDay.bind(this);
  }
  //This is a method used to choose which workouts to display in the Results column. This is will passed down to SearchResults component where it will be executed. 
  chooseDay(day){
    this.setState({workOutResults:dayType[day]});
  }
  //This is a method used to add workouts from the Results column to the Routine column
  addExercise(exercise){
    //Create a variable that contains the Routine (the day's selected exercises). Initially this variable should be an empty array. 
    console.log('addExercise');
    let workOuts = this.state.routineExercises;
    //Checks whether the id of the workout selected appears in the Routine column. If it does, then nothing happens. --Not used because I wanted to add more exercises to supersed them. 
    /*if(workOuts.find(savedExercise => savedExercise.id === exercise.id )){
      return;
    }*/
    //Adds selected workout to the Routine column and then changes the state of the Component so it shows in the Routine column. 
    workOuts.push(exercise);
    this.setState({
      routineExercises:workOuts,
      totalTime: this.state.totalTime + exercise.time
    });
    
  }
 //This is a method used to remove workouts from the Routine column to the Results column.
  removeExercise(exercise){
    let workOuts = this.state.routineExercises;
    workOuts = workOuts.filter(currentExercise => currentExercise.id !== exercise.id);
    this.setState({
      routineExercises:workOuts,
      totalTime: this.state.totalTime - exercise.time
    });
  }

  updateRoutineName(name){
    this.setState({routineName:name});
  }
  resetRoutine(){
    this.setState({
      routineName:'New Name',
      routineExercises: []
    });
    console.log(this.state);
  }
  render(){
    return (
      <div>
        <h1>The<span className="highlight">Day</span>List</h1>
        <div className="App">
          <div className='welcome-section'>
            <h2>Welcome to your work-out routine generator! </h2>
            <h3> Here you will get to create your own work-out routine for the day.</h3>
          </div>
          <SearchBar chooseDay={this.chooseDay}/>
          <div className="App-RoutineList">
            <WorkOutResults workOutResults={this.state.workOutResults}
                            onAdd={this.addExercise}/>
            <RoutineList routineExercises={this.state.routineExercises}
                         routineName={this.state.routineName}
                         onRemove={this.removeExercise}
                         onNameChange={this.updateRoutineName}
                         onReset={this.resetRoutine}
                         totalTime={this.state.totalTime}
                         />
          </div>
        </div>
      </div>
    );
  }
  
}
/*<a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>*/
export default App;
