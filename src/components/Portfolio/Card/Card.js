import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function  Card(props) {
    const {id, name, img, tags, demo, github} = props.data;
    return (
        <div key={id} className="port-card">
            <h2>{name}</h2>
            <img src={img} alt='poster' /> 
            <div>
            {
                    tags.map((t,id) => {
                        return <span key={id}>#{t}</span>
                    })
                }
            </div>
            <footer>
                <a className='visit' href={demo} target="blank" >
                    Visit
                </a>
                <a className='git' href={github} target="blank" >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </footer>
        </div>
    )
}

