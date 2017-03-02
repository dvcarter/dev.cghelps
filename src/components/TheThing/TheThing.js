import React, {PropTypes} from 'react'

const TheThing = (props) => {
    const { subtitle, address, description } = props.head;

    render() {
        var component;
        if (this.props.visible) {
            component = {subtitle};
        }
        return (
                <Transition transitionName="thing">
                    {component}
                </Transition>
        )
    }
}


TheThing.PropTypes = {
    head: PropTypes.object.isRequired,
}

export default TheThing
