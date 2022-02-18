// image profile
import { DataModel } from '../../../model/data.model';
import avatar from './michel.png';

const data : DataModel= {
    title:"Michel Hubert",
    subtitle:"Le son de demain, les sonorités d’hier",
    image:{
        src: avatar,
        alt: "Michel Hubert dans son studio"
    },
    description: <>
            Un style rétro dans <strong>un univers décalé</strong> aux influences house, électro et dance, Michel Hubert est avant
            tout <strong>un condensé d’énergie</strong>, d’humour et d’enjouement. C’est depuis son propre studio de musique,
            installé à Bernay, en Normandie, qu’il compose, arrange et mixe tous ses hits. Après avoir sorti un
            premier EP, Exorde, en décembre dernier, il se lance aujourd’hui à l’assaut des performances live. Plus qu’un
            simple concert, le show de Michel Hubert se veut être <strong>un véritable spectacle</strong>, rythmé par la musique
            et articulé autour d’une scénographie sensationnelle.
    </>,
    plateforms: [ 
        {name:"Spotify",link:"https://open.spotify.com/artist/3e5xVQwYPv4xHzwrjKaVPv?si=hSPN5ZcqTOir1B0HURQu4w"},
        {name:"Deezer",link:"https://www.deezer.com/fr/artist/156679512?app_id=140685"},
        {name:"Apple Music",link:"https://music.apple.com/fr/artist/michel-hubert/1602819524"},
        {name:"Youtube",link:"https://www.youtube.com/channel/UCqa8GQLCMGoUmX4T4UFPAmQ"},
        {name:"Soundcloud",link:"https://soundcloud.com/michel-hubert-499690446"},
        {name:"Bandcamp", link:"https://michelhubert.bandcamp.com/releases"},
       ],
    socialNetworks:[ 
        {name:"Facebook",link:"https://www.facebook.com/profile.php?id=100077093640786"},
        {name:"Instagram",link:"https://www.instagram.com/michelhubert_"},
        {name:"Twitch",link:"https://www.tiktok.com/@michelhubertmusique"},
        {name:"Tiktok", link:"https://www.twitch.tv/michelhubertfaitlamusique"},
       ],
}
export default data ;