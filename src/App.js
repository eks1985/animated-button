import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {btnStatus: "initial", progress: 0};
    this.handleProgresButtonClick.bind(this);
    this.stop.bind(this);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    // don't rerender while progress loading indicator
    return nextState.progress % 1 === 0;
  }
  
  componentDidUpdate() {
    console.log("component update");
  }
  
  stop() {
    this.setState({btnStatus: "success", progress: 0});
  }
  
  handleProgresButtonClick(btnId) {
    let interval = setInterval( () => {
      this.setState({
        progress: Math.min( this.state.progress + Math.random() * 0.1, 1 )
      });
			if( this.state.progress === 1 ) {
				this.stop(1);
				clearInterval(interval);
			}
		}, 150 );
    this.setState({btnStatus: "loading"});
  }
  
  render() {
    // console.log("state.progress, ", this.state.progress);
    const styles = this.getStyles();
    console.log(styles);
    let progressButtonSvgProgressCirclePath = {...{}, ...styles.progressButtonSvgPath, ...styles.progressButtonSvgProgressCirclePath};
    let progressButtonSvgCheckmarkCrossPath = {...{}, ...styles.progressButtonSvgPath, ...styles.progressButtonSvgCrossCheckmarkPath};
    progressButtonSvgProgressCirclePath = (this.state.btn1 !== "success" && this.state.btn1 !== "error") ? progressButtonSvgProgressCirclePath : {...{}, ...progressButtonSvgProgressCirclePath, ...styles.LOADING_SUCCESS_ERRORProgressButtonSvgProgressCircleCheckmarkCrossPath};
    progressButtonSvgCheckmarkCrossPath = (this.state.btn1 !== "success" && this.state.btn1 !== "error") ? progressButtonSvgCheckmarkCrossPath : {...{}, ...progressButtonSvgProgressCirclePath, ...styles.LOADING_SUCCESS_ERRORProgressButtonSvgProgressCircleCheckmarkCrossPath};
    
    const progressButtonButton = this.state.btnStatus === "loading" ? {...{}, ...styles.progressButtonButton, ...styles.LOADINGProgressButtonButton } : styles.progressButtonButton;
    const progressButtonButtonSpan = this.state.btnStatus === "loading" ? {...{}, ...styles.progressButtonButtonSpan, ...styles.LOADINGProgressButtonButtonSpan, ...styles.LOADINGProgressButtonSuccessErrorSpan } : styles.progressButtonButtonSpan;
    
    return (
      <div className="App">
      
        {/*button 1 */}
      	<div 
      	  className="progress-button" 
      	  id="btn1" 
      	  style={styles.progressButton}
      	>
					<button 
					  style={progressButtonButton} 
					  onClick={() => {
              this.handleProgresButtonClick("btn1");  					    
					  }}
					>
					  <span style={progressButtonButtonSpan}>Submit</span>
					</button>
					<svg 
					  style={styles.progressButtonSvg} 
					  className="progress-circle" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButtonSvgProgressCirclePath} d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
					</svg>
					<svg 
					  style={styles.progressButtonSvg} 
					  className="checkmark" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButtonSvgCheckmarkCrossPath} d="m31.5,46.5l15.3,-23.2"/><path style={progressButtonSvgCheckmarkCrossPath} d="m31.5,46.5l-8.5,-7.1"/>
					</svg>
					<svg 
					  style={styles.progressButtonSvg} 
					  className="cross" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButtonSvgCheckmarkCrossPath} d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path style={progressButtonSvgCheckmarkCrossPath} d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/>
				  </svg>
				</div>
			</div>
    );
  }
  
  getStyles = () => {
    return {
      progressButton: {
      	position: "relative",
      	display: "inline-block",
      	textAlign: "center",
      	width: "45%",
      	minWidth: "250px",
      	margin: "10px",
      },
      progressButtonButton: {
      	display: "block",
      	margin: "0 auto",
      	padding: "0",
      	width: "250px",
      	height: "70px",
      	border: "2px solid #1ECD97",
      	borderRadius: "40px",
      	background: "transparent",
      	color: "#1ECD97",
      	letterSpacing: "1px",
      	fontSize: "18px",
      	WebkitTapHighlightVolor: "transparent",
	      WebkitTransition: "background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s",
      	transition: "background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s",
      },
      progresButtonButtonSpan: {
      	WebkitTransition: "opacity 0.3s 0.1s",
      	transition: "opacity 0.3s 0.1s"
      },
      progressButtonSvg: {
      	position: "absolute",
      	top: "0",
      	left: "50%",
      	WebkitTransform: "translateX(-50%)",
      	transform: "translateX(-50%)",
      	pointerEvents: "none"
      },
      progressButtonSvgPath: {
      	opacity: "0",
      	fill: "none"
      },
      progressButtonSvgProgressCirclePath: {
      	stroke: "#1ECD97",
      	strokeWidth: "5"
      },
      progressButtonSvgCrossCheckmarkPath: {
      	stroke: "#fff",
      	strokeLinecap: "round",
      	strokeWidth: "4",
      	WebkitTransition: "opacity 0.1s",
      	transition: "opacity 0.1s"
      },
      
      
      LOADINGProgressButtonButton: {
      	width: "70px", 
      	borderWidth: "5px",
      	borderColor: "#ddd",
      	backgroundColor: "transparent",
      	color: "#fff"
      },
      LOADINGProgressButtonButtonSpan: {
      	WebkitTransition: "opacity 0.15s",
      	transition: "opacity 0.15s"
      },
      LOADINGProgressButtonSuccessErrorSpan: {
      	opacity: "0"
      },
      
      
      ERROR_SUCCESSProgressButtonButton: {
      	WebkitTransitionBackgroundColor: "0.3s, width 0.3s, border-width 0.3s",
      	transition: "background-color 0.3s, width 0.3s, border-width 0.3s"
      },
      SUCCESSProgressButtonButton: {
      	borderColor: "#1ECD97",
      	backgroundColor: "#1ECD97"
      },
      ERRORProgressButtonButton: {
      	borderColor: "#FB797E",
      	backgroundColor: "#FB797E"
      },
      
      LOADING_SUCCESS_ERRORProgressButtonSvgProgressCircleCheckmarkCrossPath: {
      	opacity: "1",
      	WebkitTransition: "stroke-dashoffset 0.3s",
      	transition: "stroke-dashoffset 0.3s"
      }
      
    }; 
  }
  
}

export default App;
