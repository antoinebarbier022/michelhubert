import avatar from './assets/michel.png';
import { ReactComponent as AppleMusic } from './assets/apple.svg';
import { ReactComponent as Facebook } from './assets/facebook-f-brands.svg';
import { ReactComponent as Instagram } from './assets/instagram-brands.svg';
import { ReactComponent as TikTok } from './assets/tiktok-brands.svg';
import { ReactComponent as Twitch } from './assets/twitch-brands.svg';
import spotify from './assets/spotify.png';
import deezer from './assets/deezer.png';
import youtube from './assets/youtube.png';


function App() {

  let items  = [
    {image:<img src={deezer} width={130} alt='logo deezer' ></img>, lien: "https://www.deezer.com/fr/artist/156679512?app_id=140685"},
    {image:<img src={spotify} width={130}  alt="logo spotify "></img>, lien: "https://open.spotify.com/artist/3e5xVQwYPv4xHzwrjKaVPv?si=hSPN5ZcqTOir1B0HURQu4w"},
    {image:<AppleMusic />, lien: "https://music.apple.com/fr/artist/michel-hubert/1602819524", },
    {image:<img src={youtube} width={120} alt="logo youtube "></img>, lien: "https://www.youtube.com/channel/UCqa8GQLCMGoUmX4T4UFPAmQ", },
  ]

  return (
    <div className="App h-full text-white py-10">
        <div className='container w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto bg-white/10 rounded-2xl px-4 sm:px-10 pt-10 shadow-xl shadow-black/5'>
          <div className='px-4'>
            <figure className='mb-10'>
              <img src={avatar} alt="Michel Hubert dans son studio" className='md:w-[400px] mx-auto rounded-2xl border-4 border-white/10'></img>
            </figure>
            <h1 className='text-2xl font-bold uppercase'>Michel Hubert</h1>
            <span className='mb-2 text-md font-mono'>Le son de demain, les sonorités d’hier</span>
            
            <p className='text-gray-300 font-light text-justify mt-5'>
            Un style rétro dans <strong>un univers décalé</strong> aux influences house, électro et dance, Michel Hubert est avant
            tout <strong>un condensé d’énergie</strong>, d’humour et d’enjouement. C’est depuis son propre studio de musique,
            installé à Bernay, en Normandie, qu’il compose, arrange et mixe tous ses hits. Après avoir sorti un
            premier EP, Exorde, en décembre dernier, il se lance aujourd’hui à l’assaut des performances live. Plus qu’un
            simple concert, le show de Michel Hubert se veut être <strong>un véritable spectacle</strong>, rythmé par la musique
            et articulé autour d’une scénographie sensationnelle.
            </p>
          </div>
          <div className='container rounded-xl my-8 grid grid-cols-2 gap-2'>
              {
                items.map( (value, index) =>
                <>
                <a  className='col-span-2 sm:col-span-1 flex items-center justify-center p-3 h-[60px] rounded-lg bg-white/5 hover:bg-white/10 transition ease-in-out delay-100' 
                    href={value.lien}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={index}
                    >
                  {value.image}
                </a>
                </>
                )
              }
          </div>
          <footer className='flex-col justify-center align-center text-center mt-10 pb-4'>
            <div className='flex gap-10 justify-center m-3'>
              <a href='https://www.facebook.com/profile.php?id=100077093640786' target="_blank" rel='noopener noreferrer'><Facebook height={30} className='fill-white/60 hover:fill-white/90'/></a>
              <a href='https://www.instagram.com/michelhubert_' target="_blank" rel='noopener noreferrer'><Instagram height={30} className='fill-white/60 hover:fill-white/90'/></a>
              <a href='https://www.twitch.tv/michelhubertfaitlamusique' target="_blank" rel='noopener noreferrer'><Twitch height={30} className='fill-white/60 hover:fill-white/90'/></a>
              <a href='https://www.tiktok.com/@michelhubertmusique' target="_blank" rel='noopener noreferrer'><TikTok height={30} className='fill-white/60 hover:fill-white/90'/></a>
            </div>
            <span className=" text-center  text-gray-200/60">Michel Hubert © 2022 - created by <a href="https://www.antoinebarbier.fr" target="_blank" rel='noopener noreferrer' className="font-medium text-white/70 hover:text-white ">@An_toine</a> </span>
          
          </footer>
        </div>
    </div>
  );
}

export default App;
