import React from 'react';
import Input from './Input';

const VersionForm = ({ handleChange, handleSubmit, form, errors}) => {
    return (
        <form className='d-inline-block' onSubmit={(e) => handleSubmit(e)}>
            <div className="col-md-9 form-line">
                <div className="form-group">
                    <Input
                        type="text"
                        name="versionA"
                        handleChange={handleChange}
                        value={form.versionA}
                        errorA={errors.versionA && errors.versionA.length > 0 ? errors.versionA : ""}
                        message={errors.versionA === "invalid input" || form.versionA.length > 0 ? errors.versionA : ""}
                        label="Version A:"
                    />
                </div>
                <div className="form-group">
                    <Input
                        type="text"
                        name="versionB"
                        handleChange={handleChange}
                        value={form.versionB}
                        errorB={handleSubmit ===true && errors.versionA ? errors.versionA : ""}
                        message={errors.versionB === "invalid version" || form.versionB.length > 0 ? errors.versionB: ""}
                        label="Version B:"
                    />
                </div>
                <div>
                    <button className="btn btn-primary btn-sm submit">Submit Version</button>
                </div>
            </div>
        </form>
    );
}

export default VersionForm;