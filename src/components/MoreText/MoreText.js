import React, {PropTypes} from 'react'
import styles from './MoreText.css'
import Transition from 'react-inline-transition-group'

var MoreText = React.createClass ({
    getInitialState() {
        return {thingIsVisible: false }
    },
    appear(visible) {
        this.setState({thingIsVisible: visible});
    },
    propTypes: {
        visible: PropTypes.bool.isRequired,
    },
    render() {
                return (
                        <div>
                            <span onClick={this.appear.bind(null, true)}>learn more</span>
                            <TheThing visible={this.state.thingIsVisible} />
                        </div>
            )
    }

});


var TheThing = React.createClass({
        render() {
            var component;
            if (this.props.visible) {
                component = <div> thing </div>;
            }
        return (
                <Transition transitionName="thing">
                    {component}
                </Transition>
        )
    }
});


export default MoreText
