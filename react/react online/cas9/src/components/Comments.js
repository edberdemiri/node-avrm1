import React from 'react'
import { connect } from 'react-redux';
import { fetchCommentRequest } from './../actions/CommentsActions'
import { Link } from 'react-router-dom'

class Comments extends React.Component {
    componentDidMount() {
        this.props.zemiKomentari()
    }
    render() {
        console.log(this.props.komentari)
        return (
            <div id="comments">
                {this.props.komentari.length > 0 ?
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.komentari.slice(0, 11).map(commen => {
                                return (
                                    <tr key={commen.id}>
                                        <td>{commen.name}</td>
                                        <td>{commen.email}</td>
                                        <td><Link to={"comments/" + commen.id}>Go to Comment</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    : null}

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        komentari: state.CommentsReducer.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        zemiKomentari: () => {
            dispatch(fetchCommentRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)