// This page is the skeleton of the Doctor Profile Page. 
import React from 'react';
import { DoctorHeader } from '../components/doctorprofilePage/doctorheader/docheader';
import { ServiceList } from '../components/doctorprofilePage/services/service_list';
import { BackNavigation } from '../components/backnavigation/BackNavigation';
import { DoctorFacts } from '../components/doctorprofilePage/overview-section/overview';
import { InsuranceList } from '../components/doctorprofilePage/insurancelist/insurance_list';
import { DoctorDatabase } from '../data/Database/doctorDatabase';
import { UserReview } from '../components/doctorprofilePage/user-reviews/user_reviews'; 
import ICarefreeState from '../data/redux/types';
import { connect } from 'react-redux';
import { NavBar } from '../components/navBar/navBar'
import './DoctorprofilePage.css';

interface DoctorProfilePageProps {
    id: number
}

class DoctorprofilePage extends React.Component<DoctorProfilePageProps> {
    render() {
        return (
            <div> 
                <NavBar /> 
                <div className="DoctorprofilePage">
                    <BackNavigation/> 
                    <DoctorHeader doctor={DoctorDatabase.getDoctorById(this.props.id)}/> 
                    <UserReview doctor={DoctorDatabase.getDoctorById(this.props.id)} user_name= "Sam R."/> 
                    <br/> 
                    <DoctorFacts doctor={DoctorDatabase.getDoctorById(this.props.id)}/>
                    <hr></hr>
                    <InsuranceList doctor={DoctorDatabase.getDoctorById(this.props.id)}/> 
                    
                    <ServiceList title="Services Offered" doctor={DoctorDatabase.getDoctorById(this.props.id)}/> 
                </div>
            </div> 
          );
    }
}

// Map redux state to component state
function mapStateToProps(state: ICarefreeState) {
    return {
        id: state.currentDoctorID
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
)(DoctorprofilePage);
export { connectedComponent as DoctorprofilePage };