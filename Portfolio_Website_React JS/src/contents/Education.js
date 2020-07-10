import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Advanced Web Developer- Certificate" where="Wake Tech Community College" from="July 2017" to="May 2020"/>
            <Widecard title="Web Development Associate Degree" where="Wake Tech Community College" from="July 2017" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    