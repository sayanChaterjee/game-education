import {Link} from 'react-router-dom'
import Lottie from "lottie-react";

const Card = ({ title, text, comp, link }) => {
  return (
    <div className="card bg-white shadow-xl max-w-96 h-full flex flex-col">
      <figure>
        <Lottie animationData={comp} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body flex flex-col">
  
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="font-semibold text-sm">{text}</p>
      
        <div className="card-actions justify-end">
        <Link 
            to={link} 
            className="text-blue-950 hover:underline"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;