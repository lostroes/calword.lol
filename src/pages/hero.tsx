import {} from "preact";

import {
  HiAdjustments,
  HiClipboardList,
  HiCash,
  HiSparkles,
} from "react-icons/hi";
import "@/styles/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <HiSparkles />
        <div className="col">
          <h1>Calword</h1>
          <small>
          #1 Discord TOS Breaking Tools
          </small>
        </div>
      </div>
      <div className="hero">
        <div className="col">
          <h2>Notice</h2>
          <small className="second">
            In order to use this software, you must have a valid
            License. You can buy an activation key on our Discord.ㅤㅤㅤ
            Also you can download FREE version from here!
          </small>
        </div>
      </div>
      <div className="three">
        <div className="col red">
          <HiAdjustments />
          <h2>Secure</h2>
          <small>No data is collected, we don't even have a database</small>
        </div>
        <div className="col green">
          <HiClipboardList />
          <h2>Features</h2>
          <small><li>Server Nukers</li></small>
          <small><li>Account Nukers</li></small>
          <small><li>Token Grabbers\Generators</li></small>
          <small><li>And more...</li></small>  
        </div>
        <div className="col purple">
          <HiCash />
          <h2>Pricing</h2>
          <small><li>Weekly License - $10</li></small>
          <small><li>Monthly License - $15</li></small>
          <small><li>Lifetime License - $30</li></small>
          <small><li>Source Code - $120</li></small>
        </div>
      </div>
      <div className="three">
        <div className="col">
          <h2>Discord Nuker</h2>
          <small>Basic Discord Nuker with 15+ options.</small>
          <a href="">
            <button className="download">Updating... </button>
          </a>
        </div>
        <div className="col">
          <h2>Our Discord </h2>
          <small>Here you can buy premium and ask our staff for help.</small>
          <a href="https://discord.gg/FUdrWQqQMH">
            <button className="download">Join Us </button>
          </a>
        </div>
        <div className="col">
        <h2>Server Booster </h2>
          <small>Does what you expect from it [Source Code]</small>
          <a href="https://cdn.discordapp.com/attachments/1058517809849704469/1076548428810698845/booster.rar">
            <button className="download">Download </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
