// image profile
import avatar from '../assets/michel.png';

const theme = {
    backgroundColor: "bg-gradient-to-bl from-blue-900 via-indigo-500 to-purple-400",
};

const data = {
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
    musicPlateforms:{
        amazonMusic:"", 
        spotify:"https://open.spotify.com/artist/3e5xVQwYPv4xHzwrjKaVPv?si=hSPN5ZcqTOir1B0HURQu4w", 
        deezer:"https://www.deezer.com/fr/artist/156679512?app_id=140685", 
        appleMusic:"https://music.apple.com/fr/artist/michel-hubert/1602819524", 
        huaweiMusic:"", 
        youtube:"https://www.youtube.com/channel/UCqa8GQLCMGoUmX4T4UFPAmQ",
        soundcloud:"https://soundcloud.com/michel-hubert-499690446"
    },
    socialNetworks:{
        facebook:"https://www.facebook.com/profile.php?id=100077093640786",
        instagram:"https://www.instagram.com/michelhubert_",
        tiktok:"https://www.tiktok.com/@michelhubertmusique",
        twitch:"https://www.twitch.tv/michelhubertfaitlamusique",

        // non utilisé
        twitter:"",
        linkedin:"",
        snapchat:"",
        telegram:"",
        reddit:"",
        slack:"",
        google:"",
        dribbble:"",
        pinterest:"",
        youtube:"",
        soundcloud:"",
        medium:"",
        whatsApp:"",
        tumblr:"",
        skype:"",
        vimeo:"",
        dailymotion:"",
        discord:"",
        viber:"",
        line:"",
        flickr:"",
    }
}

export { data, theme };