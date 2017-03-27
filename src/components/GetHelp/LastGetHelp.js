import React, { PropTypes, Component } from 'react'
import { Collapse } from 'react-bootstrap'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'


class GetHelp extends Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
     
        const { getHelp } = this.props;
        return (
                <div>
                    <div className={styles.title}>
                        <h1>Help is here</h1>
                    </div>
                    <div className={styles.holder}>
                        <button onClick={ ()=> this.setState({ open: !this.state.open })}>
                            hello
                        </button>
                        {getHelp.map((helper) => (
                            <div className={styles.options}>
                                <div className={styles.topics}> 
                                    <Collapse in={this.state.open}>
                                        <h2 className={styles.subtitle}> {helper.subtitle}</h2>
                                        <div className={styles.description}>{helper.description}</div>
                                        {/*<MoreText/> */}
                                   </Collapse>
                                </div>
                                <a href={helper.btn.link} className={styles.onlybtn}>
                                    <img className={styles.imgs} src={helper.image} />
                                        {helper.btn.label}
                                </a>
                            </div>
                        ))} 
                    </div>
                </div>
        )
    }
}

GetHelp.propTypes = {
   getHelp: PropTypes.array.isRequired,
}

export default GetHelp
