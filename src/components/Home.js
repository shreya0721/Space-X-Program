import React from "react";
import { connect } from "react-redux";
import { fetchData, filterYearData } from "../store";
import FilterPanel from './FilterPanel';
import DisplayPanel from './DisplayPanel'
class Home extends React.Component {
    componentDidMount() {
        if (this.props.data.length <= 0) {
            this.props.fetchData(null, null, null);
        }
    }

    render() {
        if(this.props.data.length > 0){
        return (
            <div className="row">
                <div className="columnLeft">
                    <FilterPanel filterPanelData={this.props.fetchData} filterYearData={this.props.filterYearData} year={this.props.year} launchSuccess={this.props.launchSuccess} landSuccess={this.props.landSuccess} />
                </div>
                <div className="columnRight">
                    <DisplayPanel data={this.props.data} />
                </div>
            </div>
        );}else return(
            <div class="loader"></div>
           
        )
    }
}
Home.serverFetch = fetchData;

const mapStateToProps = (state) => ({
    data: state.data,
    year: state.filter.year,
    launchSuccess: state.filter.launchSuccess,
    landSuccess: state.filter.landSuccess
});

const mapDispatchToProps = {
    fetchData,   
    filterYearData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
