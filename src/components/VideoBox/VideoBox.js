import React, {Component} from "react"
import styles from "./VideoBox.css"

export default class VideoBox extends Component {
    render() {
        
        return (
                <div className={styles.mainHolder}>
                    <div className={styles.boxHolder}>
                        <div className={styles.box}>
                            this is a box
                        </div>
                        <LittleVideo />
                    </div>
                </div>
        )
    }
}

class LittleVideo extends Component {

    render() {
        return (
                <div className={styles.red}>
                    <LittleVid />
                    <LittleVid />
                </div>
        )
    }
}

class LittleVid extends Component {
    render() {
        return (
                <div className={styles.gray}>
                    <div> here is a box</div>
                </div>
        )
    }
}
