import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const UrlsList = ({urlsData}) => {
    const [allUrls, SetAllUrls] = useState([]);

    useEffect(() => { // Call once on page load
        const existingUrl = JSON.parse(localStorage.getItem("shortenUrl"));
        SetAllUrls(existingUrl);
    }, [urlsData]);

    useEffect(() => { // Call once on page load
        const existingUrl = JSON.parse(localStorage.getItem("shortenUrl"));
        SetAllUrls(existingUrl);
    }, []);

    const clearHistory = () => {
        localStorage.removeItem("shortenUrl");
        SetAllUrls([]);
    }

    return (
        <div className='list-of-url layout-card'>
            <h3>All Shorten Urls</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Original Url</th>
                        <th>Shorten Url</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        allUrls?
                        allUrls.map((url, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td><a href={url.originalUrl} target='_blank' rel="noreferrer">{url.originalUrl}</a></td>
                                <td>{url.shortUrl}</td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={3}>No Records Found</td>
                        </tr>
                    }
                    <tr>
                        <td className='text-center clearHistory' onClick={clearHistory} colSpan={3}>Clear History</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UrlsList;