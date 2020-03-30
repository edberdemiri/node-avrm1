import React from 'react';
import PropTypes from 'prop-types';

export class Comments extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div id="comments">
                <span>Datum : </span>
                <span>{this.props.date}</span><br />
                <span>Broj : {this.props.broj}</span><br />
                <span>Cifra : {this.props.cifra}</span>

                {this.props.comments.map((com, i) => {
                        return (
                            <li key={i}>
                                <span>Author: {com.author}</span>&nbsp;
                                <span>Comment: {com.content}</span>&nbsp;
                                <span>{this.props.date}</span>
                            </li>
                        )
                    })}
            </div>
        )
    }
}

Comments.propTypes = {
    date: PropTypes.string,
    broj: PropTypes.number,
    cifra: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired
}