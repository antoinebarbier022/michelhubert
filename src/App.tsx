import avatar from './assets/michel.png';
import { ReactComponent as AppleMusic } from './assets/apple.svg';
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
    <div className="App flex flex-col justify-between h-screen text-white my-2">
        <div className='container w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] m-auto bg-white/10 rounded-2xl px-10 pt-10 shadow-xl shadow-black/5'>
          <div className='px-4'>
            <figure className='mb-10'>
              <img src={avatar} alt="Michel Hubert dans son studio" width={350} className='mx-auto rounded-2xl border-4 border-white/10'></img>
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
          <div className='container rounded-xl my-8 grid grid-cols-2 gap-2 grid-rows-2'>
              {
                items.map( (value, index) =>
                <>
                <a  className='flex items-center justify-center p-3 h-[60px] rounded-lg bg-white/5 hover:bg-white/10 transition ease-in-out delay-100' 
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
          <footer className="text-center m-4 text-gray-200 opacity-60">Michel Hubert © 2022 - created by <a href="https://www.antoinebarbier.fr" target="_blank" rel='noopener noreferrer' className="font-medium hover:text-white ">@An_toine</a> </footer>
        </div>
    </div>
  );
}

export default App;
