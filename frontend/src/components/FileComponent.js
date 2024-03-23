const FileComponent = () => {
  return (
    <>
      <object
        // data={`data:application/pdf;base64,${fileFromLocalStorage.base64File}`}
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <embed
          //   src={`data:application/pdf;base64,${fileFromLocalStorage.base64File}`}
          type="application/pdf"
        />
      </object>
    </>
  );
};

export default FileComponent;
