import Button from '../../Button';
import PropTypes from 'prop-types';
import className from 'classnames/bind';
import Styles from './Menu.module.scss';
const cx = className.bind(Styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item',{
        separate:data.separate,
    })
    return (
        <Button className={classes} letIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes ={
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem;
