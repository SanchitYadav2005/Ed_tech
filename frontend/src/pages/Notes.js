import SecondNavbar from "../components/SecondNavbar";
import {Document, Page} from 'react-pdf';


const Notes = () => {
  return (
    <>
      <SecondNavbar />
     <Document file="www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf">
      <Page pageNumber={2} />
     </Document>
    </>
  );
};

export default Notes;
