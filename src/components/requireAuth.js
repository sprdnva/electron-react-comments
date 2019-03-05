import React from "react";
import {connect} from "react-redux";

export default (ChildComponent) => {

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.shouldLogIn();
        }
    
        componentDidUpdate() {
            this.shouldLogIn();
        }
    
        shouldLogIn = () => {
            if (!this.props.auth) {
                this.props.history.push("/")
            }
        }
    
        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
};