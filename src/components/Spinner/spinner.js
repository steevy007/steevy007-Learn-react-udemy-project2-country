import React from 'react'
import classes from './spinner.module.css'
export default function spinner() {
    return (
        <>
            <div className={classes.content}>
                <div className={classes.loadwrapp}>
                    <div className={classes.load1}>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                    </div>
                </div>
              {
                  /**
                    <div className={classes.loadwrapp}>
                    <div className={classes.load2}>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                    </div>
                </div>
                <div className={classes.loadwrapp}>
                    <div className={classes.load3}>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                    </div>
                </div>
               
                
                
                <div className={classes.loadwrapp}>
                    <div className={classes.load7}>
                        <div className={classes.squareholder}>
                            <div className={classes.square}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.loadwrapp}>
                    <div className={classes.load8}>
                        <div className={classes.line}></div>
                    </div>
                </div>
                <div className={classes.loadwrapp}>
                    <div className={classes.load9}>
                        <div className={classes.spinner}>
                            <div className={classes.bubble1}></div>
                            <div className={classes.bubble2}></div>
                        </div>
                    </div>
                </div>
                

                   */
              }
            </div>

        </>
    )
}
