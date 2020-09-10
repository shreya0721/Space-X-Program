import React from "react";
import { YearFilterValues, LaunchFilterValues } from '../constants'

class FilterPanel extends React.Component {

    handleClick(key, value) {

        this.props.filterYearData(key, value.toLowerCase());
        switch (key) {
            case 'year':
                return this.props.filterPanelData(value, null, null);
            case 'launchSuccess':
                return this.props.filterPanelData(null, value.toLowerCase(), null);
            case 'landSuccess':
                return this.props.filterPanelData(null, null, value.toLowerCase());
        }
    }

    render() {
        const { year, launchSuccess, landSuccess } = this.props
        return (
            <div className="filterPanelStyle">
                <h2 className="heading">Filters</h2>
                <h3 className="filterHeading"><u>Launch Year</u></h3>
                {YearFilterValues.map(val =>
                    <button type="button" className={year == val ? "selectedFilterButton" : "filterButton"} onClick={() => this.handleClick('year', val)}><h3 className="filterText">{val}</h3></button>
                )}
                <h3 className="filterLaunchHeading"><u>Successful Launch</u></h3>
                {LaunchFilterValues.map(val =>
                    <button type="button" className={launchSuccess == val.toLowerCase() ? "selectedFilterButton" : "filterButton"} onClick={() => this.handleClick('launchSuccess', val)}><h3 className="filterText">{val}</h3></button>
                )}
                <h3 className="filterLaunchHeading"><u>Successful Landing</u></h3>
                {LaunchFilterValues.map(val =>
                    <button type="button" className={landSuccess == val.toLowerCase() ? "selectedFilterButton" : "filterButton"} onClick={() => this.handleClick('landSuccess', val)}><h3 className="filterText">{val}</h3></button>
                )}
            </div>
        );
    }
}

export default FilterPanel;
