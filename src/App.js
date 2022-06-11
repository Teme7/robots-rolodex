import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  // console.log(searchField);
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);
  
  useEffect(() => {
    const newFilteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField);
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    // console.log(event.target.value)
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Robots Rolodex</h1>

      <SearchBox
        className='search-box'
        placeholder='Search robots'
        onChangeHandler={onSearchChange}
      />
      <CardList robots={filteredRobots} />
    </div>
  )
}
/* 
class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchString: ''
    };
    // console.log('constructor (1)')
  };

  componentDidMount() {
    // console.log('ComponentDidMount (3)')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => {
            return {robots : users}
        }, 
          () => {
            // console.log(this.state)
          })
        )
  }

onSearchChange = (event) => {
  // console.log(event.target.value)
  const searchString = event.target.value.toLocaleLowerCase();
  this.setState(() => {
    return  { searchString }
  });
}

  render() {
    const { robots, searchString } = this.state; //destructuring
    const { onSearchChange } = this;

    // console.log('render (2)')
    const filterdRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchString);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Robots Rolodex</h1>

        <SearchBox
          className='search-box'
          placeholder='Search robots'
          onChangeHandler={onSearchChange}
        />
        
        <CardList robots={filterdRobots} />
      </div>
    )
  }

}
 */
export default App;