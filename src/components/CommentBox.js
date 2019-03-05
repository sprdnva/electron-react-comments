import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

class CommentBox extends React.Component {
    state = { comment: '' };

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

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button type='submit'>
                            Submit Comment
                        </button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div> 
        )
    }
}

export default connect(mapStateToProps, actions)(CommentBox);