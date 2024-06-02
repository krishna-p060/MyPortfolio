import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import res from '../Krishna_s_Resume_2.pdf'
import { BsDownload } from "react-icons/bs";
import './Resume.css';

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='resPdf'>
        <div>
      <Document file={res} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      </div>
      
      <div className='downloadButtonContainer'>
        <a href={res} target='_blank' rel='noopener noreferrer' download="Krishna_s_Resume_2.pdf">
          <button className='downloadCV' type='button'>
            <BsDownload />&nbsp; Download CV
          </button>
        </a>
      </div>

    </div>
  );
}

export default Resume;