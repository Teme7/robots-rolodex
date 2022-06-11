// import  { Component } from 'react';
import './seach-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  
  return (
    <input 
      className={className} //this's making the classname dynamic
      type='search' 
      placeholder={placeholder} //same here, dynamic placeholder
      onChange={onChangeHandler}
    />
  );
}

// class SearchBox extends Component {
//   render() {
//     return(
//       <input 
//         className={this.props.className} //this's making the classname dynamic
//         type='search' 
//         placeholder={this.props.placeholder} //same here, dynamic placeholder
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox;