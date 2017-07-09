import React from "react";
import D3Modal from "./common/D3Modal";

class D3Map extends React.Component {

    render() {
        return (
            <div className="container">

            <div className="view hm-black-strong" id = "dashboardCover">
            <div className="full-bg-img flex-center">
            		<div className="d3container">
                		<div id="map"></div>
                		<div id="atlantaVis"></div>
                		<D3Modal />
            		</div>
        		</div>
        		</div>
            </div>
        )
    }
}

export default D3Map;