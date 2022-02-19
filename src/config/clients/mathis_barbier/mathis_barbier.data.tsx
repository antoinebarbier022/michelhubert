// image profile
import { DataModel } from '../../../model/data.model';
import avatar from './image.png';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `💻`
    },
    title:"Mathis Production",
    subtitle:"Réalisateur/Monteur à votre service",
    image:{
        src: avatar,
        alt: "Mathis Barbier vidéaste"
    },
    description: <>
        Je m’appelle Mathis Barbier, j’ai 20 ans et j’ai créé mon auto-entreprise audiovisuelle en août 2020. 
        Cela fait maintenant 5 ans que je suis passionné par le cinéma et la vidéo, et donc 5 ans que je suis autodidacte. 
        Passionné par ce milieu, ce que je préfère plus que tout c’est réussir à transmettre des émotions à travers mes images, 
        capturer les moments de la vie et pouvoir les faire durer éternellement. Je suis motivé et je fais tout pour réussir pleinement 
        dans ce milieu. Je vous laisse jeter un oeil à mes différentes réalisations que j’ai pu réaliser professionnellement 
        au cours de l’année 2020 et 2021.
    </>,
    contact: {
        location: "Narbonne",
        email: "productionmathis@gmail.com"
    },
    socialNetworks:[ 
        {name:"Facebook",link:"null"},
        {name:"Instagram",link:"null"},
        {name:"Tiktok",link:"null"},
       ],
    displaySection: ["socials networks","contact", "footer"]
    
}

export default data;