import React, { PropTypes, Component } from 'react'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'



export default class GetHelp extends Component {
   constructor(props) {
       super(props)
       this.state = {
           isVisible: false
       }
   }

   handleClick() {
       this.setState({
           isVisible: !this.state.isVisible
       })
   }
    
    render() {
        const { getHelp } = this.props
        return (
                <div>
                    <div className={styles.title}>
                        <h1>Help is here</h1>
                    </div>
                    <div className={styles.holder}>
                        {getHelp.map((helper, i) => (
                            <div className={styles.options}>
                                <div className={styles.topics}> 
                                   <h2 className={styles.subtitle}> {helper.subtitle}</h2>
                                   <button onClick={ () => this.handleClick() }>Hat</button>
                                        { 
                                            this.state.isVisible &&
                                            <Show className={styles.description} key={getHelp.id}> 
                                                {helper.description}
                                                {"childVisible" + getHelp.indexOf(helper)}
                                            </Show>
                                        }
                                </div>
                                <img className={styles.imgs} src={helper.image} />

                            </div>
                        ))} 
                    </div>
                </div>
        )
    }
}
const Show = (props) => <div>{props.children}</div>
GetHelp.propTypes = {
   getHelp: PropTypes.array.isRequired,
}
