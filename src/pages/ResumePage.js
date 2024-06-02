import Resume from '../components/Resume';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function ResumePage() {
    return (
        <div>
            <Resume/>
        </div>
    )
}

export default ResumePage;