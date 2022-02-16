import { ReactNode } from 'react';
import { data, theme} from './data/data';

// Music Plateforms
import { ReactComponent as AppleMusic } from './assets/plateforms/apple-music.svg';
import spotify from './assets/plateforms/spotify.png';
import deezer from './assets/plateforms/deezer.png';
import youtube from './assets/plateforms/youtube.png';

// Social Networks
import { ReactComponent as Dailymotion } from './assets/icons/dailymotion-brands.svg';
import { ReactComponent as Discord } from './assets/icons/discord-brands.svg';
import { ReactComponent as Dribbble } from './assets/icons/dribbble-brands.svg';
import { ReactComponent as Facebook } from './assets/icons/facebook-brands.svg';
import { ReactComponent as Flickr } from './assets/icons/flickr-brands.svg';
import { ReactComponent as Google } from './assets/icons/google-plus-brands.svg';
import { ReactComponent as Instagram } from './assets/icons/instagram-brands.svg';
import { ReactComponent as Line } from './assets/icons/line-brands.svg';
import { ReactComponent as Linkedin } from './assets/icons/linkedin-brands.svg';
import { ReactComponent as Medium } from './assets/icons/medium-brands.svg';
import { ReactComponent as Pinterest } from './assets/icons/pinterest-brands.svg';
import { ReactComponent as Reddit } from './assets/icons/reddit-brands.svg';
import { ReactComponent as Skype } from './assets/icons/skype-brands.svg';
import { ReactComponent as Slack } from './assets/icons/slack-brands.svg';
import { ReactComponent as Snapchat } from './assets/icons/snapchat-brands.svg';
import { ReactComponent as Soundcloud } from './assets/icons/soundcloud-brands.svg';
import { ReactComponent as Telegram } from './assets/icons/telegram-brands.svg';
import { ReactComponent as TikTok } from './assets/icons/tiktok-brands.svg';
import { ReactComponent as Tumblr } from './assets/icons/tumblr-brands.svg';
import { ReactComponent as Twitch } from './assets/icons/twitch-brands.svg';
import { ReactComponent as Twitter } from './assets/icons/twitter-brands.svg';
import { ReactComponent as Viber } from './assets/icons/viber-brands.svg';
import { ReactComponent as Vimeo } from './assets/icons/vimeo-brands.svg';
import { ReactComponent as WhatsApp } from './assets/icons/whatsapp-brands.svg';
import { ReactComponent as Youtube } from './assets/icons/youtube-brands.svg';

interface MusicPlateforme{
  name: string,
  image: ReactNode,
  icon?: ReactNode,
  link: string
}

interface SocialMedia{
  name: string,
  icon: ReactNode,
  link: string
}

function App() {

  // website title
  document.title = data.title;

  // set background 
  const tab = theme.backgroundColor.split(" ");
  tab.map( x => document.body.classList.add(x));
  

  const mediaPlatformes: MusicPlateforme[] = [
    { 
      name: "Deezer",
      image:<img src={deezer} width={130} alt='logo deezer' ></img>, 
      link: data.musicPlateforms.deezer
    },
    {
      name: "Spotify",
      image:<img src={spotify} width={130}  alt="logo spotify "></img>, 
      link: data.musicPlateforms.spotify},
    {
      name: "Apple Music",
      image:<AppleMusic />, 
      link: data.musicPlateforms.appleMusic, },
    { 
      name:"Youtube",
      image:<img src={youtube} width={120} alt="logo youtube "></img>, 
      link: data.musicPlateforms.youtube, },
  ];

  const styleIcon = "fill-white/60 hover:fill-white/90";
  const socialNetworks: SocialMedia[] = [
    { name: "Facebook", icon: <Facebook height={30} className={styleIcon}/>,
      link: data.socialNetworks.facebook },
    { name: "Instagram", icon: <Instagram height={30} className={styleIcon}/>,link: data.socialNetworks.instagram },
    { name: "Twitch", icon: <Twitch height={30} className={styleIcon}/>,
      link: data.socialNetworks.twitch },
    { name: "Snapchat", icon: <Snapchat height={30} className={styleIcon}/>,
      link: data.socialNetworks.snapchat },
    { name: "Linkedin", icon: <Linkedin height={30} className={styleIcon}/>,
      link: data.socialNetworks.linkedin },
    { name: "Telegram", icon: <Telegram height={30} className={styleIcon}/>,
      link: data.socialNetworks.telegram },
    { name: "Reddit", icon: <Reddit height={30} className={styleIcon}/>,
      link: data.socialNetworks.reddit },
    { name: "twitter", icon: <Twitter height={30} className={styleIcon}/>,
      link: data.socialNetworks.twitter },
    { name: "tiktok", icon: <TikTok height={30} className={styleIcon}/>,
      link: data.socialNetworks.tiktok },
    { name: "Slack", icon: <Slack height={30} className={styleIcon}/>,
      link: data.socialNetworks.slack },
    { name: "google+", icon: <Google height={30} className={styleIcon}/>,
      link: data.socialNetworks.google },
    { name: "dribbble", icon: <Dribbble height={30} className={styleIcon}/>,
      link: data.socialNetworks.dribbble },
    { name: "Pinterest", icon: <Pinterest height={30} className={styleIcon}/>,
      link: data.socialNetworks.pinterest }, 
    { name: "Youtube", icon: <Youtube height={30} className={styleIcon}/>,
      link: data.socialNetworks.youtube },
    { name: "Soundcloud", icon: <Soundcloud height={30} className={styleIcon}/>,
      link: data.socialNetworks.soundcloud },
    { name: "Medium", icon: <Medium height={30} className={styleIcon}/>,
      link: data.socialNetworks.medium },
    { name: "WhatsApp", icon: <WhatsApp height={30} className={styleIcon}/>,
      link: data.socialNetworks.whatsApp },
    { name: "Tumblr", icon: <Tumblr height={30} className={styleIcon}/>,
      link: data.socialNetworks.tumblr },
    { name: "Skype", icon: <Skype height={30} className={styleIcon}/>,
      link: data.socialNetworks.skype },
    { name: "Vimeo", icon: <Vimeo height={30} className={styleIcon}/>,
      link: data.socialNetworks.vimeo },
    { name: "Dailymotion", icon: <Dailymotion height={30} className={styleIcon}/>,
      link: data.socialNetworks.dailymotion },
    { name: "Discord", icon: <Discord height={30} className={styleIcon}/>,
      link: data.socialNetworks.discord },
    { name: "Viber", icon: <Viber height={30} className={styleIcon}/>,
      link: data.socialNetworks.viber },
    { name: "Line", icon: <Line height={30} className={styleIcon}/>,
      link: data.socialNetworks.line },
    { name: "Flickr", icon: <Flickr height={30} className={styleIcon}/>,
      link: data.socialNetworks.flickr }
  ];



  return (
    <div className="App h-full text-white py-10">
        <div className='container w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto bg-white/10 rounded-2xl px-4 sm:px-10 pt-10 shadow-xl shadow-black/5'>
          <div className='px-4'>
            <figure className='mb-10'>
              <img src={data.image.src} alt={data.image.alt} className='md:w-[400px] mx-auto rounded-2xl border-4 border-white/10'></img>
            </figure>
            <h1 className='text-2xl font-bold uppercase'>{data.title}</h1>
            <span className='mb-2 text-md font-mono'>{data.subtitle}</span> 
            <p className='text-gray-300 font-light text-justify mt-5'> {data.description}</p>
          </div>
          <div className='container rounded-xl my-8 grid grid-cols-2 gap-2'>
              {
                mediaPlatformes.map( (value, index) =>
                  <a  className='col-span-2 sm:col-span-1 flex items-center justify-center p-3 h-[60px] rounded-lg bg-white/5 hover:bg-white/10 transition ease-in-out delay-100' 
                      href={value.link}
                      title={value.name}
                      rel="noopener noreferrer"
                      target="_blank"
                      key={index}
                      >
                    {value.image}
                  </a>
                )
              }
          </div>
          <footer className='flex-col justify-center align-center text-center mt-10 pb-4'>
            <div className='flex flex-wrap gap-10 justify-center m-3'>
              {
                socialNetworks.map( (value, index) =>
                  value.link &&
                  <a  href={value.link} 
                      key={index} 
                      title={value.name}
                      target="_blank" 
                      rel='noopener noreferrer'>
                    {value.icon}
                  </a>)
              }
            </div>
            <span className=" text-center  text-gray-200/60">{data.title} © {new Date().getFullYear()} - Made by <a href="https://www.antoinebarbier.fr" target="_blank" rel='noopener noreferrer' className="font-medium text-white/70 hover:text-white ">@An_toine</a> </span>
          
          </footer>
        </div>
    </div>
  );
}

export default App;
