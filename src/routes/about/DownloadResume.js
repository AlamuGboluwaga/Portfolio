import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/GBOLUWAGA ALAMU CV .pdf";
const DownloadResume = () => {
  return (
    <section>
      <a
        className="download-btn"
        href={Resume}
        download="GBOLUWAGA ALAMU CV.pdf"
      >
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
