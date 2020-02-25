import React from 'react';

const Table = ({ version }) => {
    return (
        <div className="table d-inline-block">
            <div className="text-justify text-center mx-auto">
                <h3>Version input history</h3>
            </div>
            <div className="text-justify" >
                <table className="table table-striped text-center mx-auto">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">VersionA</th>
                            <th scope="col">VersionB</th>
                            <th scope="col">Version Results</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            version.map((v, i) => {
                                return (
                                    <tr key={v._id} idx={i + 1}>
                                        <th scope="row">{i + 1}</th>
                                        <td
                                            type="text"
                                            value={v.versionA}
                                            name="versionA"
                                        >{v.versionA}</td>
                                        <td
                                            type="text"
                                            value={v.versionB}
                                            name="versionB"
                                        >{v.versionB}</td>
                                        <td
                                            type="text"
                                            value={v.results}
                                            name="results"
                                        >{v.results}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Table;