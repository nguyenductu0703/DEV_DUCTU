
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    letIcon,
    rightIcon,
    children,
    onClick,
    disabled,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, small, large, text, rounded });
    return (
        <Comp className={classes} {...props}>
            {letIcon && <span>{letIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href:  PropTypes.string,
    primary:  PropTypes.bool,
    outline:  PropTypes.bool,
    small:  PropTypes.bool,
    large:  PropTypes.bool,
    text:  PropTypes.bool,
    rounded:  PropTypes.bool,
    letIcon:  PropTypes.node,
    rightIcon:  PropTypes.node,
    children:  PropTypes.node.isRequired,
    onClick:  PropTypes.func,
    disabled:  PropTypes.bool,
}

export default Button;
