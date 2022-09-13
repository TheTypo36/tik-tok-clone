import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Marquee from "react-fast-marquee";
import "../styles/VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@theTypo36</h3>
        <p>This is some description</p>
        <div
          className="videoFooter_ticker"
          style={{ background: "transparent" }}
        >
          <MusicNoteIcon className="videoFooter_icon" />
          <Marquee>Ashish Raghuvanshi</Marquee>
        </div>
      </div>
    </div>
  );
}
export default VideoFooter;
