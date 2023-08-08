import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import Pixel7 from "../assets/Pixel7.png";
import Untitled3 from "../assets/Untitled3.png";
import windows from "../assets/windows.png";
import apple from "../assets/apple.png";
import linux from "../assets/linux.png";
import googleapk from "../assets/googleapk.png";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainContent">
        <div className="ContentInfo">
          <div className="contentHeader">
            <p>FlowDrop</p>
          </div>
          <div className="contentAbout">
            <p>
              Welcome to the <b>FlowDrop</b> project. This software allows fast
              and wirelessly send files between devices over Wi-Fi.
            </p>
          </div>
        </div>
        <div className="ContentSide">
          <div className="LeftSide">
            <img src={Pixel7} alt="not found" width={100} height={100} />
          </div>
          <div className="RightSide">
            <div className="rightSideImg">
              <img src={Untitled3} alt="not found" width={100} height={100} />
            </div>
            <div className="linksHeader">
              <p>Downloads</p>
            </div>
            <div className="rightSideDownloadLinks">
              <div className="googlePlay btnStyle">
                <Link to="/">
                  <img
                    className="linkImg"
                    src={googleapk}
                    alt="not found"
                    width={30}
                    height={20}
                  />
                  <p className="linkText">GooglePlay</p>
                </Link>
              </div>
              <div className="apk btnStyle">
                <Link to="/">
                  <img
                    className="linkImg"
                    src={googleapk}
                    alt="not found"
                    width={30}
                    height={20}
                  />
                  <p className="linkText">Apk</p>
                </Link>
              </div>
              <div className="linux btnStyle">
                <Link to="/">
                  <img
                    className="linkImg"
                    src={linux}
                    alt="not found"
                    width={25}
                    height={20}
                  />
                  <p className="linkText">Linux</p>
                </Link>
              </div>
              <div className="macOS btnStyle">
                <Link to="/">
                  <img
                    className="linkImg"
                    src={apple}
                    alt="not found"
                    width={25}
                    height={20}
                  />
                  <p className="linkText">MacOS</p>
                </Link>
              </div>
              <div className="windows btnStyle">
                <Link to="/">
                  <img
                    className="linkImg"
                    src={windows}
                    alt="not found"
                    width={30}
                    height={22}
                  />
                  <p className="linkText">Windows</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
