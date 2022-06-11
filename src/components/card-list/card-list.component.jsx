import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ robots }) => (
  // const { robots } = props; //we can use this destructuring here or inside the props

    <div className='card-list'>
      {robots.map((robot) => {
        return (
          <Card robot={robot} key={robot.id} />
        )
      } 
      )}
    </div>
  );

/* class CardList extends Component {
  render () {
    // console.log('render from CardList') //rendered twice at initial state and upon updating the state
    const { robots } = this.props;

    return (
      <div className='card-list'>
        {robots.map((robot) => {
          return (
            <Card robot={robot} key={robot.id} />
          )
        } 
        )}
      </div>
    );
  }
} */

export default CardList;