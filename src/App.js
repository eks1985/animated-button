import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {btnStatus: "initial", progress: 0, hover: false};
    this.handleProgresButtonClick.bind(this);
    this.stop.bind(this);
    this.styles = {
      initial: {
        progressButton: {
        	position: "relative",
        	display: "inline-block",
        	textAlign: "center",
        	width: "45%",
        	minWidth: "250px",
        	margin: "10px",
        },
        progressButton__Button: {
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
        progresButton__Button__Span: {
        	WebkitTransition: "opacity 0.3s 0.1s",
        	transition: "opacity 0.3s 0.1s"
        },
        progressButton__Svg: {
        	position: "absolute",
        	top: "0",
        	left: "50%",
        	WebkitTransform: "translateX(-50%)",
        	transform: "translateX(-50%)",
        	pointerEvents: "none"
        },
        progressButton__Svg__Path: {
        	opacity: "0",
        	fill: "none"
        },
        progressButton__Svg_progressCircle__Path: {
        	stroke: "#1ECD97",
        	strokeWidth: "5"
        },
        progressButton__Svg_checkmark__Path: {
        	stroke: "#fff",
        	strokeLinecap: "round",
        	strokeWidth: "4",
        	WebkitTransition: "opacity 0.1s",
        	transition: "opacity 0.1s"
        },
        progressButton__Svg_cross__Path: {
        	stroke: "#fff",
        	strokeLinecap: "round",
        	strokeWidth: "4",
        	WebkitTransition: "opacity 0.1s",
        	transition: "opacity 0.1s"
        },
      },
      loading: {
        progressButton__Button: {
        	width: "70px",
        	borderWidth: "5px",
        	borderColor: "#ddd",
        	backgroundColor: "transparent",
        	color: "#fff"
        },
        progresButton__Button__Span: {
        	WebkitTransition: "opacity 0.15s",
        	transition: "opacity 0.15s",
        	opacity: "0"
        },
        progressButton__Svg_progressCircle__Path: {
          opacity: "1",
	        WebkitTransition: "stroke-dashoffset 0.3s",
	        transition: "stroke-dashoffset 0.3s"
        }
      },
      success: {
        progressButton__Button: {
          WebkitTransition: "background-color 0.3s, width 0.3s, border-width 0.3s",
	        transition: "background-color 0.3s, width 0.3s, border-width 0.3s",
	        borderColor: "#1ECD97",
	        backgroundColor: "#1ECD97",
        },
        progresButton__Button__Span: {
        	opacity: "0"
        },
        progressButton__Svg_checkmark__Path: {
          opacity: "1",
	        WebkitTransition: "stroke-dashoffset 0.3s",
	        transition: "stroke-dashoffset 0.3s"
        }
      },
      error: {
        progressButton__Button: {
          WebkitTransition: "background-color 0.3s, width 0.3s, border-width 0.3s",
	        transition: "background-color 0.3s, width 0.3s, border-width 0.3s",
	        borderColor: "#FB797E",
	        backgroundColor: "#FB797E"
        },
        progresButton__Button__Span: {
        	opacity: "0"
        },
        progressButton__Svg_cross__Path: {
          opacity: "1",
	        WebkitTransition: "stroke-dashoffset 0.3s",
	        transition: "stroke-dashoffset 0.3s"
        }
      }
    };
    this.preparedStyles = this.prepareStyles();
  }
  
  prepareStyles() {
    
    const { initial, loading, success, error } = this.styles;
    
    return {
      progressButton: {
        initial: initial.progressButton,
        loading: initial.progressButton,
        success: initial.progressButton,
        error: initial.progressButton
      },
      progressButton__Button: {
        initial: initial.progressButton__Button,
        loading: {...initial.progressButton__Button, ...loading.progressButton__Button},
        success: {...initial.progressButton__Button, ...success.progressButton__Button},
        error: {...initial.progressButton__Button, ...error.progressButton__Button},
        hover:  {
          backgroundColor: "#1ECD97", 
        	color: "#fff"
        },
        noHover: {
          backgroundColor: "transparent",
          color: "#1ECD97"
        }
      },
      progressButton__Button__Span: {
        initial: initial.progresButton__Button__Span,
        loading: {...initial.progresButton__Button__Span, ...loading.progresButton__Button__Span},
        success: {...initial.progresButton__Button__Span, ...success.progresButton__Button__Span},
        error: {...initial.progresButton__Button__Span, ...error.progresButton__Button__Span},
      },
      progressButton__Svg: {
        initial: initial.progressButton__Svg,
        loading: initial.progressButton__Svg,
        success: initial.progressButton__Svg,
        error: initial.progressButton__Svg,
      },
      progressButton__Svg_progressCircle__Path: {
        initial: initial.progressButton__Svg__Path,
        loading: {...initial.progressButton__Svg__Path, ...loading.progressButton__Svg_progressCircle__Path},
        success: initial.progressButton__Svg__Path,
        error: initial.progressButton__Svg__Path,
      },
      progressButton__Svg_checkmark__Path: {
        initial: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_checkmark__Path},
        loading: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_checkmark__Path},
        success: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_checkmark__Path, ...success.progressButton__Svg_checkmark__Path},
        error: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_checkmark__Path},
      },
      progressButton__Svg_cross__Path: {
        initial: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_cross__Path},
        loading: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_cross__Path},
        success: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_cross__Path},
        error: {...initial.progressButton__Svg__Path, ...initial.progressButton__Svg_cross__Path, ...error.progressButton__Svg_cross__Path}
      }
    };
    
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
    
    const preparedStyles = this.preparedStyles;
    const status = this.state.btnStatus;
    const hover = this.state.hover;

    const progressButton                           = preparedStyles.progressButton[status];
    let progressButton__Button                     = preparedStyles.progressButton__Button[status];
    const progressButton__Button__Span             = preparedStyles.progressButton__Button__Span[status];
    const progressButton__Svg                      = preparedStyles.progressButton__Svg[status];
    const progressButton__Svg_progressCircle__Path = preparedStyles.progressButton__Svg_progressCircle__Path[status];
    const progressButton__Svg_cross__Path          = preparedStyles.progressButton__Svg_cross__Path[status];
    const progressButton__Svg_checkmark__Path      = preparedStyles.progressButton__Svg_checkmark__Path[status];
    
    progressButton__Button = hover && status === "initial" ? 
      {...progressButton__Button, ...preparedStyles.progressButton__Button.hover} :
      {...progressButton__Button, ...preparedStyles.progressButton__Button.noHover};
    
    progressButton__Button = status === "success" ? {...progressButton__Button, ...preparedStyles.progressButton__Button.success} : progressButton__Button;
    
    return (
      <div className="App">
      
        {/*button 1 */}
      	<div 
      	  className="progress-button" 
      	  id="btn1" 
      	  style={progressButton}
      	>
					<button
					  className={status === "loading" ? "loading": ""}
					  style={progressButton__Button} 
					  onClick={() => {
              this.handleProgresButtonClick("btn1");  					    
					  }}
					  onMouseEnter={() => {
					    this.setState({hover: true});
					  }}
					  onMouseLeave={() => {
					    this.setState({hover: false});
					  }}
					>
					  <span style={progressButton__Button__Span} >Submit</span>
					</button>
					<svg 
					  style={progressButton__Svg} 
					  className="progress-circle" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButton__Svg_progressCircle__Path} d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
					</svg>
					<svg 
					  style={progressButton__Svg} 
					  className="checkmark" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButton__Svg_checkmark__Path} d="m31.5,46.5l15.3,-23.2"/><path style={progressButton__Svg_checkmark__Path} d="m31.5,46.5l-8.5,-7.1"/>
					</svg>
					<svg 
					  style={progressButton__Svg} 
					  className="cross" 
					  width="70" 
					  height="70"
					>
					  <path style={progressButton__Svg_cross__Path} d="m35,35l-9.3,-9.3"/><path style={progressButton__Svg_cross__Path} d="m35,35l9.3,9.3"/><path style={progressButton__Svg_cross__Path} d="m35,35l-9.3,9.3"/><path style={progressButton__Svg_cross__Path} d="m35,35l9.3,-9.3"/>
				  </svg>
				</div>
			</div>
    );
  }
  
}

export default App;
