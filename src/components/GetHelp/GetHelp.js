import React, { PropTypes, Component } from 'react'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'


export default class GetHelp extends Component {
    //state = {
    //    return {
    //        selections: []
    //    }
    //};
    //onChildToggle = ({ id, selected }) => {
     //   let selections = this.state.selections;
     //   selections[id] = selected;
     //   this.setState({
     //       selections: selections
     //   });
    //};
    //buildChildren = ({ dataItem }) => {
        
    
    
    
    
    
    
   // state = {
   //     childVisible: false,
   // };
   // _onClick = ({ childVisible }) => {
   //     this.setState({
   //         childVisible: !this.state.childVisible,
   //     });
   //  }
    render() {
        {/*let hat = []*/}
        const { getHelp } = this.props
        return (
                <div>
                    <div className={styles.title}>
                        <h1>Help is here</h1>
                    </div>
                    <div className={styles.holder}>
                        {getHelp.map((helper) => (
                            <div className={styles.options}>
                                <div className={styles.topics}> 
                                   <h2 className={styles.subtitle}> {helper.subtitle}</h2>
                                   <div className={styles.description}> {helper.description}</div>
                                   
                                   
                                   {/*<div>
                                        {
                                           "childVisible" + getHelp.indexOf(helper)
                                        }
                                   </div>*/}
                                   
                                   {/*<div onClick={this._onClick}>
                                        hat
                                   </div>*/}
                                   {/*
                                       this.state.childVisible && <div className={styles.description}>{helper.description}</div>
                                   */}
                                </div>
                                <img className={styles.imgs} src={helper.image} />

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
