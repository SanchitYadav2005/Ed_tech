import SecondNavbar from "../components/SecondNavbar";
import "../styles/filePage.scss";

const FilePage = () => {
  return (
    <>
      <SecondNavbar />
      <main className="main-container">
        <form>
          <label className="file-label" for="file">
            Choose file
          </label>
          <input type="file" className="file" id="file" />
        </form>
        <div className="uploaded-files-container">
          <h3>You don't have any uploaded files yet</h3>
        </div>
      </main>
    </>
  );
};

export default FilePage;
