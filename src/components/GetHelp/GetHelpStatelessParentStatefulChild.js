import React, { PropTypes, Component } from 'react'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'

class MoreText extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: false
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        {/*const { getHelp } = this.props;*/}
        return (
                <div key = { getHelp.id } className={styles.holder}>
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.subtitle}> {getHelp.subtitle}</h2>
                                    <div onClick={ () => this.toggleHidden() }> Learn More </div>
                                    {this.state.isHidden && <div className={styles.description}> {getHelp.id} </div> }
                                </div>
                            </div>
                    ))}
               )
    }
}    

const GetHelp = ({ getHelp }) => {
     <div>
               <div className={styles.title}>
                        <h1>Help is here</h1>
                </div>
                <div>
                        {getHelp.map((getHelp) =>(
                                <MoreText getHelpr={getHelp} key={getHelp.id}/>
                        ))}
                        
                </div>
                <img className={styles.imgs} src={getHelp.image} />


            </div>
}

GetHelp.propTypes = {
   getHelp: PropTypes.array.isRequired
}

export default GetHelp
