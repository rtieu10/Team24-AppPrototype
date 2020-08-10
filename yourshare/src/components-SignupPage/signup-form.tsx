import React from "react";
import { pages } from "../App";
import {DefaultButton} from 'office-ui-fabric-react'; 


import { createJoinAction } from "../redux/actions"
import { IYourShareState } from '../redux/types';
import { connect } from 'react-redux';

interface SignupFormProps {
    changePage: (page: pages) => void;
    saveJoinInfo: (n: string, p: string, z: string) => void;
  }

// interface SignUpFormState{ 
//     username:string, 
//     phone_number:string, 
//     zip_code:string, 
//   }

  
// export class SignupForm extends React.Component<SignupFormProps, SignUpFormState>{
//     constructor(props:SignupFormProps, state: SignUpFormState){
//         super(props,state)
//         this.state = {username:"", phone_number:"", zip_code:""}; 
//     }

//     render(){ 
//         return(
//             <div className ="Signup-Section">
//                 <h2> Join Your Community</h2>
//                 <h3> Sign-up </h3> 
//                 <form className = "join-form" id="signup-form">
//                     <input type= "text" placeholder = "Username:" value = {this.state.username} onChange = {this.onChangeUsername} />  
//                     <input placeholder = "Phone Number:" value = {this.state.phone_number} onChange = {this.onChangePhoneNumber}/> 
//                     <input placeholder = "Zip Code:" value = {this.state.zip_code} onChange = {this.onChangeZipCode}/> 
//                     <DefaultButton text ="Join" onClick = {this.joinButton}/> 
//                 </form>  
//           </div>
         
//         ); 
//     }


//     onChangeUsername = (event: React.FormEvent<HTMLInputElement>):void =>{ 
//         this.setState({username: event.currentTarget.value}); 
//     }; 
    
//     onChangePhoneNumber = (event: React.FormEvent<HTMLInputElement>):void =>{ 
//         this.setState({phone_number: event.currentTarget.value}); 
//     }; 
    
//     onChangeZipCode = (event: React.FormEvent<HTMLInputElement>):void =>{ 
//         this.setState({zip_code: event.currentTarget.value}); 
//     }; 
    
//     joinButton = (event: React.MouseEvent<HTMLButtonElement>):any => {
//         event.preventDefault();
//             if(this.state.username && this.state.zip_code && this.state.phone_number)
//                 this.props.onClick(pages.WelcomePage)
//             else
//             alert("Please complete the sign-up form")
//     }

// }



  
class SignupForm extends React.Component<SignupFormProps>{
    nameRef: React.RefObject<HTMLInputElement>;
    phoneNumRef: React.RefObject<HTMLInputElement>;
    zipCodeRef: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.nameRef = React.createRef();
        this.phoneNumRef = React.createRef();
        this.zipCodeRef = React.createRef();
      }


    render(){ 
        return(
            <div className ="Signup-Section">
                <h2> Join Your Community</h2>
                <h3> Sign-up </h3> 
                <form className = "join-form" id="signup-form" onSubmit={this.handleSubmit}>
                    <input type= "text" placeholder = "Username:" ref={this.nameRef} />  
                    <input placeholder = "Phone Number:" ref={this.phoneNumRef}/> 
                    <input placeholder = "Zip Code:"  ref={this.zipCodeRef} /> 
                    <DefaultButton type="submit" text ="Join"/> 
                    {/* <button type="submit">Join</button> */}
                </form>  
          </div>
         
        ); 
    }


    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.nameRef.current == null || this.phoneNumRef.current == null || this.zipCodeRef.current == null) {
          alert('INTERNAL ERROR: missing reference!');
          return;
        }
        this.props.saveJoinInfo(this.nameRef.current.value, this.phoneNumRef.current.value, this.zipCodeRef.current.value);
        this.props.changePage(pages.WelcomePage)
      }


}


// Map redux state to component state
function mapStateToProps(state: IYourShareState) {
    return {
      // no data props
    }
  }
  
  // Map redux actions to component props
  function mapDispatchToProps(dispatch: any) {
    return {
      saveJoinInfo: (n: string, p: string, z: string) => dispatch(createJoinAction(n, p, z))
    }
  }
  
  // The Hight Order Component (HOC)
  // props need to be recived by the component
  const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignupForm);
  
  export { connectedComponent as SignupForm }
