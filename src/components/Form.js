import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SHORTING_API, FORM_INFO } from '../constant';
import UrlsList from './UrlsList';

const Form = () => {
  const [inputValue, SetInputValue] = useState();
  const [loading, SetLoading] = useState(false);
  const [copied, SetCopied] = useState(false);

  // Error Variables 
  const [showError, SetShowError] = useState(false);
  const [error, SetError] = useState('');
  // Error Variables 

  // Show Results Variables 
  const [showResults, SetShowResults] = useState(false);
  const [shortUrl, SetShortUrl] = useState('');
  // Show Results Variables 

  const [urlsData, SetUrlData] = useState([]);


  const callAPI = () => {
    SetLoading(true); //Show loading status
    fetch(`${SHORTING_API}?url=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        if (data.ok === true) {
          SetShowResults(true);
          SetShowError(false);
          pushDataInLocalStorage(inputValue, data?.result?.short_link); // Save in localstorage Function
          SetShortUrl(data?.result?.short_link);
        } else {
          SetShowError(true);
          SetError(data.error)
        }
        SetLoading(false);
        SetCopied(false);
      })
  }

  const pushDataInLocalStorage = (originalUrl, shortUrl) => { // Save in local storage Function
    let existingUrl = JSON.parse(localStorage.getItem("shortenUrl"));
    if(existingUrl == null) existingUrl = [];
    const newObj = {
        "originalUrl": originalUrl,
        "shortUrl": shortUrl
    };
    existingUrl.push(newObj);
    localStorage.setItem("shortenUrl", JSON.stringify(existingUrl))
    SetUrlData(JSON.stringify(existingUrl));
  }

  return (
    <Row>
      <Col>
        <div className='mainform layout-card'>
          <h3>Link Shortener</h3>
          <div className='form-container'>
            {/* Error Message  */}
            {showError ? <p className='errorInfo'>{error}</p> : ''}
            <p className='form-label-cs'>Enter a Link:</p>
            {/* Form  */}
            <div className='form-main'>
              <input className="searchForm" type="text" placeholder="example.com" id="input" value={inputValue} onChange={e => SetInputValue(e.target.value)} />
              <button type="button" className="submitButton" onClick={callAPI}>→</button>
            </div>
            {/* Wait Loading  */}
            {loading ? <p className='loading'>Please wait....</p> : ''}
            {/* Read Text  */}
            <p className='re-info'>{FORM_INFO}</p>
          </div>
        </div>

        {/* Results Section   */}
        {
          showResults ?
            <div className='url-result layout-card text-center'>
              <h3>Link Generated</h3>
              <CopyToClipboard onCopy={()=>SetCopied(true)} text={shortUrl}><p>{shortUrl}</p></CopyToClipboard>
              {copied ? <p className='copoedText'>Copied</p> : ''}
            </div> : '' 
        }

        <UrlsList urlsData={urlsData}/>

      </Col>
    </Row>
  )
}

export default Form