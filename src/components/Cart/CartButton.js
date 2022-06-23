import classes from './CartButton.module.css';
import { cartActions } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../app/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
   

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
