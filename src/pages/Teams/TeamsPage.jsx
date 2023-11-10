import "./TeamsPage.css";
import "./TeamsPage.css";
import sajid from "../../assets/sajid.jpg";
import rishitha from "../../assets/rishitha.jpg";
import rishithreddy from "../../assets/rishithreddy.jpg";
import dwisanth from "../../assets/dwisanth.jpg"
import lahari from "../../assets/lahari.jpg";
import mubhashira from "../../assets/mubhashira.jpg";
import saiganesh from "../../assets/saiganesh.jpg";
import saipavan from "../../assets/saipavan.jpg";
import saivivek from "../../assets/saivivek.jpg";
import sreenadh from "../../assets/sreenadh.jpg";
import anil from '../../assets/anil.jpg';
import NavComponent from '../../components/NavBar/NavComponent';

    

const Teams = () => {   

    const teamMembers = [
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: rishitha },
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: dwisanth },
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: sajid},        
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: rishithreddy},
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: anil},        
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: lahari },
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: mubhashira},        
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: saiganesh },
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: saipavan},        
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: saivivek },
        { name: 'Name of person', role: 'Role in Ignite', imageSrc: sreenadh},
      ];

  return (
    <>
    <NavComponent/>
    <div className='for-whole-Team-page'>
      <h1 className="for-heading-in-team">The Crew</h1>
      <div className="blockContainer" >
        {teamMembers.map((member, index) => (
          <div className="blockInfo" key={index}>
            <div className="for-image">
              <div className="block-img">
                <img src={member.imageSrc} alt={member.name} />
              </div>
            </div>
            <p>{member.name}</p>
            <h3>{member.role}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Teams;
