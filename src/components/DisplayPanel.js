import React from "react";

class DisplayPanel extends React.Component {

    render() {
       
        if (this.props.data.length > 0) {
            return (
                <div className="displayPanel" >
                    {this.props.data.map((d, i) => {
                        return (
                            <div className="rightDisplay">
                                <img src={d.links.mission_patch} alt={d.mission_name} width="128" height="165" className="spaceImage"></img>
                                <h4 className="flightText">{d.mission_name}&nbsp;#{d.flight_number}</h4>
                                <h4 className="flightTextBold"><b>Mission Ids:</b></h4>
                                <ul className="list">
                                    {d.mission_id.length > 0 && d.mission_id.map(id =>
                                        <li>{id}</li>
                                    )}
                                </ul>
                                <h4 className="flightTextBold"><b>Launch Year:</b>&nbsp;{d.launch_year}</h4>
                                <h4 className="flightTextBold"><b>Successful Launch:</b>&nbsp;{d.launch_success && d.launch_success.toString()}</h4>
                                <h4 className="flightTextBold"><b>Successful</b><br /><b> Landing:</b>&nbsp;{d.land_success && d.land_success.toString()}</h4>

                            </div>
                        )
                    }
                    )}
                </div>
            );
        } else return (
            <div className="error">
                <h3>No Results Found! Please try with different Filters</h3>
            </div>
        )
    }
}

export default DisplayPanel;
