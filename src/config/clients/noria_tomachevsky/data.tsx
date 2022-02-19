// image profile
import { DataModel } from '../../../model/data.model';
import avatar from './image.jpeg';

const data : DataModel= {
    favicon:{
        type: "emoji",
        src: `🍃`
    },
    title:"Noria Tomachevsky",
    subtitle:"Professeur de danse",
    image:{
        src: avatar,
        alt: "Michel Hubert dans son studio"
    },
    description: <>
        La plus belle danseuse de tous les temps et la meilleure prof de danse classique !
    </>,
    contact: {
        //location: "Montpellier",
        email: "noria.tomachevsky@gmail.com"
    },
    plateforms:[
        {name:"Youtube",link:"https://www.youtube.com/channel/UC-kgIVx5FDuf3LPFYzV6_sQ/featured"},
        {name:"Instagram",link:"https://www.instagram.com/noriatomach/?hl=fr"},
    ],
    socialNetworks:[ 
        //{name:"Instagram",link:"null"},
       ],
    displaySection: ["socials networks","contact", "footer"]
    
}

export { data };