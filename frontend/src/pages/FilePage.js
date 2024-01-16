import SecondNavbar from "../components/SecondNavbar";

const FilePage = () => {
  return (
    <>
      <SecondNavbar />
      <main>
        <input type="file" className="file"/>
        <div>
            <h3>You don't have any uploaded files yet</h3>
        </div>
      </main>
    </>
  );
};

export default FilePage;
