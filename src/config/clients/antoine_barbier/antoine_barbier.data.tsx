// image profile
import { DataModel } from '../../../model/data.model';
import { SectionsType } from '../../../types/All.types';
import avatar from './image.jpg';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Antoine",
    subtitle:"Developpeur Web Freelance",
    image:{
        src: avatar,
        alt: "Michel Hubert dans son studio"
    },
    description: <>
        Passionné par le design et l'informatique, je me lance sur <strong>5euro.com</strong> afin de partager mes compétences. 
        Depuis de nombreuses années j'ai pu aquérir ...
        <br/>
        J'ai créé ce site internet afin de permettre 
    </>,
    contact: {
        location: "36 quai des Orfèvres, Paris ",
        email: "adresse@gmail.com"
    },
    plateforms: [ 
        {name:"5euro.com",link:"null"},
        {name:"Youtube",link:"null"},
        {name:"Amazon Music",link:"null"},
        {name:"Bandcamp", link:"null"},
        {name:"Itunes Store", link:"null"}
       ],
    socialNetworks:[ 
        {name:"Facebook",link:"null"},
        {name:"Instagram",link:"null"},
        {name:"Dribbble",link:"null"},
       ],
    displaySection: ["contact", "footer"]
    
}

export default data;