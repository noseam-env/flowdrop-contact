import { Link } from "react-router-dom";
import "../styles/CodePage.css";
import "../styles/pagebase.css";
import {ReactComponent as GitHubIcon} from "../assets/icons/github.svg";
import {ReactComponent as DesktopIcon} from "../assets/icons/desktop.svg"
import {ReactComponent as AndroidIcon} from "../assets/icons/platforms/android.svg"
import {ReactComponent as CLIIcon} from "../assets/icons/cli.svg"
import {ReactComponent as CodeIcon} from "../assets/icons/code.svg"

function Repository(props) {
  const Icon = props.icon;
  return (
      <div className="codeContent">
        <div className="codeContentHeader">
          <Icon />
          <p>{props.title}</p>
        </div>
        <div className="codeContentText">
          <p>{props.text}</p>
        </div>
        <div className="codeContentSourceLink">
          <Link to={"https://github.com/noseam-env/" + props.repo}>
            <GitHubIcon />
            <p>Source code</p>
          </Link>
        </div>
      </div>
  );
}

export default function CodePage() {
  return (
    <div className="PageBase">
      <div className="PageBase__inner">
        <div className="CodePage">
          <div className="CodeHeader">
            <p>Code</p>
          </div>
          <div className="CodeContent">
            <Repository icon={DesktopIcon} title="FlowDrop Qt" text="Desktop app for Linux, macOS and Windows with Qt-based GUI written in C++. It has very good performance." repo="flowdrop-qt" />
            <Repository icon={AndroidIcon} title="FlowDrop Android" text="Android app, currently unstable but works!" repo="flowdrop-android" />
            <Repository icon={CLIIcon} title="flowdrop-cli" text="FlowDrop CLI. Uses the libflowdrop" repo="flowdrop-cli" />
            <Repository icon={CodeIcon} title="libflowdrop" text="Core implementation written in C++. Supports all platforms and covers all the functionality of the specification" repo="libflowdrop" />
          </div>
        </div>
      </div>
    </div>
  );
}
