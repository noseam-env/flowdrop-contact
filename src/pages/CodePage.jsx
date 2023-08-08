import { Link } from "react-router-dom";
import "../styles/CodePage.css";
import code from "../assets/code.png";
import pc from "../assets/pc.png";
import git from "../assets/git.png";
import apk from "../assets/apk.png";

export default function CodePage() {
  return (
    <div className="CodePage">
      <div className="CodeHeader">
        <p>Code</p>
      </div>
      <div className="CodeContent">
        <div className="codeContent">
          <div className="codeContentHeader">
            <img src={pc} alt="not found" />
            <p>FlowDrop Qt</p>
          </div>
          <div className="codeContentText">
            <p>
              Desktop app for Linux, macOS and Windows with Qt-based GUI written
              in C++. It has very good performance.
            </p>
          </div>
          <div className="codeContentSourceLink">
            <Link to="/">
              <img src={git} alt="not found" />
              <p>Source code</p>
            </Link>
          </div>
        </div>
        <div className="codeContent">
          <div className="codeContentHeader">
            <img src={apk} alt="not found" />
            <p>FlowDrop Android</p>
          </div>
          <div className="codeContentText">
            <p>Android app, currently unstable but works!</p>
          </div>
          <div className="codeContentSourceLink">
            <Link to="/">
              <img src={git} alt="not found" />
              <p>Source code</p>
            </Link>
          </div>
        </div>
        <div className="codeContent">
          <div className="codeContentHeader">
            <img src={code} alt="not found" />
            <p>libflowdrop</p>
          </div>
          <div className="codeContentText">
            <p>
              Core implementation written in C++. Supports all platforms and
              covers all the functionality of the specification
            </p>
          </div>
          <div className="codeContentSourceLink">
            <Link to="/">
              <img src={git} alt="not found" />
              <p>Source code</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
