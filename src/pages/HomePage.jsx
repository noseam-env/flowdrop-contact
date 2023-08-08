import "./HomePage.css";
import "../components/pagebase.css";
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

function createGitHubReleaseDownloader(repo, needContain) {
  return async () => {
    const response = await fetch("https://api.github.com/repos/" + repo + "/releases/latest");
    const release = await response.json();
    let downloadUrl = null;
    for (const asset of release.assets) {
      if (!asset['name'].toLowerCase().includes(needContain)) {
        if (asset['label'] === null) continue;
        if (!asset['label'].toLowerCase().includes(needContain)) continue;
      }
      downloadUrl = asset['browser_download_url'];
    }
    if (downloadUrl === null) return;
    const downloader = document.createElement('a');
    downloader.download = 'Download';
    downloader.href = downloadUrl;
    downloader.click();
    downloader.remove();
  };
}

function AppDownload(props) {
  const Icon = props.type.icon;
  return (
      <div className={props.type.style + " appDownloadButton"} onClick={props.onClick}>
        <Icon
          className="appDownloadIcon"
          width={36}
          height={36}
        />
        <p className="appDownloadText">{props.text}</p>
      </div>
  );
}

export default function HomePage() {
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
            <AppDownload
              type={AppDownloadTypes.Android}
              text="APK"
              onClick={createGitHubReleaseDownloader("noseam-env/flowdrop-android", "apk")}/>
            {/*<AppDownload type={AppDownloadTypes.Linux} text="Linux" />*/}
            <AppDownload
              type={AppDownloadTypes.Apple}
              text="macOS"
              onClick={createGitHubReleaseDownloader("noseam-env/flowdrop-qt", "macos")} />
            <AppDownload
              type={AppDownloadTypes.Windows}
              text="Windows"
              onClick={createGitHubReleaseDownloader("noseam-env/flowdrop-qt", "windows")} />
          </div>
        </div>
      </div>
    </div>
  );
}
