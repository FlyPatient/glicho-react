import PropTypes from 'prop-types';
import { Children, Component, cloneElement } from 'react';
import { navigate } from '../../history/history';

class Link extends Component {
    render() {
        const { to, children } = this.props;

        return cloneElement(Children.only(children), {
            onClick: () => navigate(to)
        })
    }
} 

Link.propTypes = {
    to: PropTypes.string.isRequired, 
    children: PropTypes.node
}

export default Link;

