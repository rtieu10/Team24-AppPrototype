import React from "react";
import "../header.css";
import { useSpring, animated } from 'react-spring';

import { IYourShareState, Person } from '../redux/types';
import { connect } from 'react-redux';
/*The header component which contains the back navigation icon and the Screen title*/
interface WelcomeProps {
    you: Person;
}


// Welcome component to test animations using react spring hook 
const Welcome = (props: WelcomeProps) => {
    const OurAnimation = useSpring({
      from: {marginLeft: -5000},
      to: {marginLeft: 0},
      delay: 100
    });

    return (
      <div>
        <div className="head">
        <animated.p style={OurAnimation}>
          Welcome , {props.you.name} !
        </animated.p>
        </div>
      </div>
    );
  }



function mapStateToProps(state: IYourShareState) {
  return {
    you: state.currentUser // "currentUser" in Redux state is 'you' on this page
  }
}

// Map redux actions to component props
// This function returns an object with 2 functions that the component can call
// increase... fires a dispatch with increase... as a type
function mapDispatchToProps(dispatch: any) {
  return {
    // no actions on this page / screen
  }
}

// The Hight Order Component (HOC)
// props need to be recived by the component
const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

export { connectedComponent as Welcome }
