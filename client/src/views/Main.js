import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import VersionForm from '../components/VersionForm';
import Table from '../components/Table';
import Title from '../components/Title';
import 'bootstrap/dist/css/bootstrap.css';

// Version format
var semRegex = new RegExp(/^([0-9]+)\.([0-9]+)\.([0-9]+)/);

const Main = () => {
    const [newVersion, setNewVersion] = useState({
        versionA: "",
        versionB: "",
        results: ""
    })
    const [errors, setErrors] = useState({
        versionA: "",
        versionB: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [version, setVersion] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/version')
            .then(res => {
                setVersion(res.data)
            })
    }, [isSubmitted])


    useEffect(()=> {
        validForm();
    },[newVersion])


// Fucntion to compare both Versions
    const beginComparingVersions = () => {
        if (newVersion.versionA === "") {
            return newVersion
        }
        if (newVersion.versionA === "") {
            return newVersion
        }
        else {
            let compareVersions = newVersion.versionA.localeCompare(newVersion.versionB);
            if (compareVersions === -1) {
                newVersion.results = '"' + newVersion.versionA + '" comes before "' + newVersion.versionB + '"';
            }
            else if (compareVersions === 0) {
                newVersion.results = 'Both versions are the same';
            }
            else {
                newVersion.results = '"' + newVersion.versionA + '" comes after "' + newVersion.versionB + '"';
            }
            console.log(newVersion.versionA);
            return newVersion
        }
    }
// Function to test the input format
    const validForm = () => {
        if (!semRegex.test(newVersion.versionA)) {
            setErrors({
                versionA: "invalid version"
            })
            return true;
        }
        else if (!semRegex.test(newVersion.versionB)) {
             setErrors({
                versionB: "invalid version"
            })
            return true;
        }
        else {
            setErrors({
                versionA: "",
                versionB: ""
            })
            return false;
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setNewVersion({
            ...newVersion,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!semRegex.test(newVersion.versionA)) {
            console.log("nope");
            setErrors({
                versionA: "invalid version",
                versionB: ""
            })
            return errors;
        }
        if (!semRegex.test(newVersion.versionB)) {
            setErrors({
                versionA: "",
                versionB: "invalid version"
            })
            return errors;
        }
        else {
            beginComparingVersions(newVersion); 
            Axios.post('http://localhost:8000/api/version', newVersion)
                .then(res => {
                    setNewVersion({
                        versionA: "",
                        versionB: "",
                        results: ""
                    });
                    setErrors({
                        versionA: "",
                        versionB: ""
                    })
                    setIsSubmitted(!isSubmitted);
                })
                .catch(err => setErrors(err.response.data))
        }
    }



    return (
        <div className='container'>
            <Title />
            <div className="mainContent align-top">
                <VersionForm
                    form={newVersion}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />
                <div className="d-inline-block row justify-content-around align-top">
                    <Table
                        version={version}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;