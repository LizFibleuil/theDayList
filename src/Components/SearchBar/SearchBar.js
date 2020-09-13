import React from 'react';
import './SearchBar.css';

let dayType = '';
class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.chooseDayType = this.chooseDayType.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    chooseDayType(event){
        return dayType = event.target.value;
    }
    handleClick(){
        this.props.chooseDay(dayType);
    }
    render(){
        return (
            <div className='SearchBar'>
                <h3>What type of workout day is it today?</h3>
                <form onClick={this.chooseDayType}>
                    <input type="radio" name="src" value="legDay" /> Leg Day
                    <input type="radio" name="src" value="coreDay" /> Core Day
                    <input type="radio" name="src" value="armDay" /> Arms Day
                    <input type="radio" name="src" value="fullBodyDay" /> Full-Body
            </form>
            <button className="SearchButton"  onClick={this.handleClick}>SEARCH</button>
          </div>
        );
    }
}

export default SearchBar;