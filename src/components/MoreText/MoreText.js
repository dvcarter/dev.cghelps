import React, { PropTypes,Component} from 'react'
import styles from "./MoreText.css"




const More = ({ moreText }) => {
    return (
            <div>
                { moreText.map((morer) => (
                        <div> 
                            {morer.subtitle}
                        </div>
                ))}
            </div>
    )
}

More.propTypes = {
    more: PropTypes.array.isRequired,
}


class MoreText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: false
        }
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({
            count: !this.state.count
        })
    }
    render() {
                return (    <div>
                                <span className={styles.MoreText} onClick={this.handleClick.bind(this)}>learn more</span>
                                {this.state.count && 
                                    <MoreText>
                                        <div> "Hats"</div>
                                    </MoreText>
                                }
                            </div>
                )
    }
}



export default MoreText
