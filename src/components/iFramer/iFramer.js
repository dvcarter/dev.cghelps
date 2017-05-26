import React from 'react'


class iFrame extends React.Component {
    render: function() {
                var iFrame=this.props.iframe;

                return (
                    <div>
                        <iFrame src={this.props.src} />
                    </div>
                )
            }
});

export default iFrame
