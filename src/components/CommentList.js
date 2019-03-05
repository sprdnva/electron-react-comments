import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { comments: state.comments }
}

class CommentList extends React.Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>;
        })
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CommentList);