import "../styles/MainPage.css";
import "../styles/pagebase.css";
import { Link } from "react-router-dom";
import Untitled3 from "../assets/Untitled3.png";
import { ReactComponent as android } from "../assets/icons/platforms/android.svg";
import { ReactComponent as apple } from "../assets/icons/platforms/apple.svg";
import { ReactComponent as linux } from "../assets/icons/platforms/linux.svg";
import { ReactComponent as windows } from "../assets/icons/platforms/windows.svg";
import { ReactComponent as AndroidMockup } from "../assets/android_mockup.svg";

const AppDownloadTypes = {
  Android: {style: "android", icon: android},
  Linux: {style: "linux", icon: linux},
  Apple: {style: "apple", icon: apple},
  Windows: {style: "windows", icon: windows}
}

function AppDownload(props) {
  const Icon = props.type.icon;
  return (
      <div className={props.type.style + " btnStyle"}>
        <Link to={props.link}>
          <Icon
              className="appDownloadIcon"
              width={36}
              height={36}
          />
          <p className="appDownloadText">{props.text}</p>
        </Link>
      </div>
  );
}

/*

<div className="ContentSide">
          <div className="LeftSide">
            <AndroidMockup width={300} height={300} className="androidMockup" />
          </div>
          <div className="RightSide">
            <div className="rightSideImg">
              <img src={Untitled3} alt="not found" width={100} height={100} />
            </div>
            <div className="linksHeader">
              <p>Downloads</p>
            </div>
            <div className="rightSideDownloadLinks">
<AppDownload type={AppDownloadTypes.Android} text="APK" />
<AppDownload type={AppDownloadTypes.Apple} text="macOS" />
<AppDownload type={AppDownloadTypes.Windows} text="Windows" />
</div>
</div>

 */

export default function MainPage() {
  return (
    <div className="PageBase">
      <div className="PageBase__inner">
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
          <div className="linksHeader">
            <p>Downloads</p>
          </div>
          <div className="rightSideDownloadLinks">
            {/*<AppDownload type={AppDownloadTypes.Android} text="Google Play" />*/}
            <AppDownload type={AppDownloadTypes.Android} text="APK" link="https://github.com/noseam-env/flowdrop-android/releases/" />
            {/*<AppDownload type={AppDownloadTypes.Linux} text="Linux" />*/}
            <AppDownload type={AppDownloadTypes.Apple} text="macOS" link="https://github.com/noseam-env/flowdrop-qt/releases/" />
            <AppDownload type={AppDownloadTypes.Windows} text="Windows" link="https://github.com/noseam-env/flowdrop-qt/releases/" />
          </div>
        </div>
      </div>
    </div>
  );
}
