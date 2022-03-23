// image profile
import { DataModel } from '../../../model/data.model';
import avatar from './image.jpg';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Antoine Barbier",
    subtitle:"Developpeur Web et passionné d'UX/UI",
    image:{
        src: avatar,
        alt: "Michel Hubert dans son studio"
    },
    description: <>
        Passionné par le design et l'informatique, je me lance sur <strong>5euro.com</strong> afin de partager mes compétences avec vous. 
        <br/>
        Si vous souhaitez travailler avec moi, je vous conseille d'aller découvrir mes offres de <strong>microservices</strong> sur 5euros.com ou bien de me parler de votre projet par mail, Instagram ou linkedin.
    </>,
    contact: {
        //location: "36 quai des Orfèvres, Paris ",
        email: "antoine.barbier@icloud.com"
    },
    
    plateforms: [ 
        {name:"5euro.com", link:"null"},
        {name:"Dribbble", link:"https://dribbble.com/An_toine"},
        {name:"Gitlab", link:"null"},
        {name:"Github", link:"null"},
       ],
    socialNetworks:[ 
        {name:"Instagram",link:"null"},
        {name:"Linkedin",link:"null"},
       ],
    
}

export { data } ;