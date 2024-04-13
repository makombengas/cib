import { teamData } from '../../data/data';
import './team.scss';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className='teamsContainer'>
        <h1>Unsere Team</h1>
        <div className="teamContainer">
            {teamData.map(team =>(
                <div className="team" key={team.id}>
                   <div className="imageContainer">
                     <img src={team.image} alt={team.image} />
                   </div>
                    <h2>{team.name}</h2>
                    <span>{team.position}</span>
                    <p>{team.text}</p>

                 
                    <div className="socialMedia" >
                               {team.icon.map(icons =>(
                               <Link to={icons.teamLink} target='blank' key={icons.id}>
                                        <img   src={icons.image} alt="" />
                                    
                               </Link>
                                ))}
                     </div>          
                
          
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team