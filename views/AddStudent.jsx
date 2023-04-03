import React, { Component } from 'react'
const formStyle = {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "20px"
};
export default class extends Component {
    render() {
        return (
            <div>
                <form action='/students' method="POST" style={formStyle}>
                    Student Name:
                    <input type='text' name='name' placeholder="Enter Name" />
                    Grade:
                    <input type='text' name='grade' placeholder="Enter Grade" />
                    <input type="submit" name="" value="Add Student" />
                </form>

            </div>
        )
    }
}
