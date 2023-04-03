import React, { Component } from 'react'
const stuStyle = {
    marginLeft: "40%",
    fontSize: "20px"
}
const lableStyle = {

}
export default class Show extends Component {
    render() {
        const student = this.props.student
        return (
            <div style={stuStyle}>
                <h4>Name: {student.name}</h4>
                <h4>Grade: {student.grade}</h4>
                <a href="/students">Back</a>
            </div>
        )
    }
}


module.exports = Show;