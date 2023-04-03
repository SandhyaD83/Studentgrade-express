import React, { Component } from 'react'

const myStyle = {
    color: 'red',
    textAlign: "center"
};
const listStyle = {
    marginLeft: "40%",
    fontSize: "20px"
}
export default class Index extends Component {
    render() {
        const students = this.props.students

        return (
            <div >
                <h1 style={myStyle}>List of All Students </h1>

                <ul style={listStyle}>
                    {students.map((student, i) => {
                        return (
                            <li key={i} >
                                <a href={`/student/${i}`}>
                                    {student.name}
                                </a><br /><br />
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/AddStudent" style={listStyle}>Add a new student and grade</a>
                </nav>
            </div>
        )
    }
}
module.exports = Index;