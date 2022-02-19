

import { ReactComponent as Phone } from '../../assets/icons/phone-solid.svg';
import { ReactComponent as Localisation } from '../../assets/icons/location-dot-solid.svg';
import { ReactComponent as Email } from '../../assets/icons/envelope-solid.svg';
import LinkCard from '../LinkCard/Link.component';

type LinkCardProps = {
    email?: string,
    phone?: string,
    location?: string,
    className?: string,
    hidden?: boolean,
};

function Contact( { email, phone, location, hidden, className, } : LinkCardProps) {
    if (hidden) {
        return (<></>);
    }
    return (  <div className={`container mb-8 flex flex-wrap gap-2 ${className}`}>
        {
            email && 
                <LinkCard link={'mailto:' + email}  className="min-w-fit order-last flex-1 flex flex-col gap-3 p-2">
                    <Email width={25} fill="white" className="mt-2"/>
                    <p className="mx-4"> { email }</p>
                </LinkCard>
        }
        {
            location && 
                <LinkCard link={"https://www.google.com/maps/search/" + location} className="min-w-fit flex-1 flex flex-col gap-3 p-2">
                    <Localisation width={25} fill="white" className="mt-2"/>
                    <p className="px-4"> { location }</p>
                </LinkCard>
        }

        {
            phone && 
                <LinkCard link={'tel:' + phone} className="min-w-fit flex-1 flex flex-col gap-3 p-2">
                    <Phone width={25} fill="white" className="mt-2"/>
                    <p className="px-4"> { phone }</p>
                </LinkCard>
        }
    </div>);
}

export default Contact;