

// Music Plateforms
import { ReactComponent as AppleMusic } from '../../assets/plateforms/apple-music.svg';
import { ReactComponent as CinqEuros } from '../../assets/plateforms/5euro.svg';
import { ReactComponent as AmazonMusic} from '../../assets/plateforms/amazon-music.svg';
import { ReactComponent as Soundcloud} from '../../assets/plateforms/soundcloud.svg';
import itunes from '../../assets/plateforms/itunes-store.png';
import bandcamp from '../../assets/plateforms/bandcamp.png';
import spotify from '../../assets/plateforms/spotify.png';
import deezer from '../../assets/plateforms/deezer.png';
import youtube from '../../assets/plateforms/youtube.png';


import { theme } from "../../config/main";
import { ReactNode } from "react";
import { PlateformType } from "../../types/Plateforms.types";

type SocialNetworksProps = {
    hidden?:boolean,
    data: Array<{name: PlateformType, link: string}>,
};

function LinksPlateforms( { hidden = false, data, } : SocialNetworksProps) {

    const PlatformeImage = new Map<PlateformType, ReactNode>([
      ["Spotify", <img src={spotify} width={130}  alt="logo spotify "></img> ],
      ["Deezer", <img src={deezer} width={130} alt='logo deezer' ></img> ],
      ["5euro.com", <CinqEuros height={40}/> ],
      ["Apple Music", <AppleMusic /> ],
      ["Amazon Music", <AmazonMusic width={130}/> ],
      ["Itunes Store", <img src={itunes} width={130} alt="logo Youtube "></img> ],
      ["Soundcloud", <Soundcloud width={170} height={40}/>],
      ["Youtube", <img src={youtube} width={120} alt="logo Youtube "></img> ],
      ["Bandcamp", <img src={bandcamp} width={140} alt="logo Bandcamp "></img> ],
    ]);

    if (hidden) {
        return (<></>);
    }
    return (<div className={`container rounded-xl mb-8 grid grid-cols-2 gap-2 px-4`}>
    {
      data.map( (value, index) => 
      PlatformeImage.get(value.name) &&
      <a  className={`col-span-2 sm:col-span-1 flex items-center justify-center  h-[60px] rounded-lg ${theme.linkMusicBg} ${theme.linkMusicHoverBg} transition ease-in-out delay-[80]`} 
            href={value.link}
            title={value.name}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            >
          {PlatformeImage.get(value.name)}
        </a>
        )
    }
</div> );
}

export default LinksPlateforms;