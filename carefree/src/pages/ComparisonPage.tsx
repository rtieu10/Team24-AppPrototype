import React from 'react';
import './ComparisonPage.css'
import { Doctor } from '../data/Database/doctor';
import { DoctorDatabase } from '../data/Database/doctorDatabase';
import { DynamicDoctorCard } from '../components/comparisonPage/DynamicDoctorCard';
import { ColumnCard } from '../components/comparisonPage/ColumnCard';
import { connect } from 'react-redux';
import ICarefreeState from '../data/redux/types';
import { BackNavigation } from '../components/backnavigation/BackNavigation';
import { NavBar } from '../components/navBar/navBar'

interface ComparisonPageProps {
    ids:number[]
    attributes:string[]
}


class ComparisonPage extends React.Component<ComparisonPageProps> {
    constructor(props:ComparisonPageProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar/>
                <BackNavigation/> 
                {this.renderBody()}
            </div>
        );
    }

    renderBody() {
        if(this.props.ids.length == 0) {
            return(
                <div className="ComparisonPageBodyNoContent">
                    <h1> No Doctors To Compare </h1>
                    <p> Search doctors and pin them to begin comparing doctors </p>
                </div>
            )
        }
        return(
            <div className="ComparisonPageBody">
                <ColumnCard doctor = {DoctorDatabase.getDoctorById(this.props.ids[0])} attributes={this.props.attributes}/>
                <div className="DoctorCards">
                    {this.props.ids.map((id) => <DynamicDoctorCard key={id} doctor={DoctorDatabase.getDoctorById(id)} attributes={this.props.attributes} length={this.props.ids.length}/>)}
                </div>
            </div>
        )
    }
}

// Map redux state to component state
function mapStateToProps(state: ICarefreeState) {
    return {
        ids: state.comparableDoctorsByID,
        attributes: state.comparableAttributes
    }
}
// Map redux actions to component props
function mapDispatchToProps(dispatch: any) {
    return {
        // no actions needed
    }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComparisonPage);
export { connectedComponent as ComparisonPage };