import React from 'react'

class HomeBackgroud extends React.Component{
    render(){
        return(
            <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" >
                <rect width="900" height="600" fill={this.props.backgroudColor}></rect>
                <g><g transform="translate(490 124)">
                    <path d="M0 -85.9L74.4 -42.9L74.4 42.9L0 85.9L-74.4 42.9L-74.4 -42.9Z" fill="#297EA6"></path>
                </g><g transform="translate(584 335)">
                    <path d="M0 -82L71 -41L71 41L0 82L-71 41L-71 -41Z" fill="#297EA6"></path>
                </g><g transform="translate(240 283)"
                    ><path d="M0 -83L71.9 -41.5L71.9 41.5L0 83L-71.9 41.5L-71.9 -41.5Z" fill="#297EA6"></path>
                </g><g transform="translate(506 510)">
                    <path d="M0 -53L45.9 -26.5L45.9 26.5L0 53L-45.9 26.5L-45.9 -26.5Z" fill="#297EA6"></path>
                </g><g transform="translate(802 393)">
                    <path d="M0 -54L46.8 -27L46.8 27L0 54L-46.8 27L-46.8 -27Z" fill="#297EA6"></path>
                </g><g transform="translate(694 68)">
                    <path d="M0 -55L47.6 -27.5L47.6 27.5L0 55L-47.6 27.5L-47.6 -27.5Z" fill="#297EA6"></path>
                </g><g transform="translate(42 380)">
                    <path d="M0 -72L62.4 -36L62.4 36L0 72L-62.4 36L-62.4 -36Z" fill="#297EA6"></path>
                </g></g>
            </svg>
        );
    }
}
export default HomeBackgroud;