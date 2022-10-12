import High from './high';
import Low from './low';

function Footer({ radioValue, hourValue, setHourValue }) {
    
    return (
        <>
            {radioValue === 'Low' ? (<Low {...{hourValue, setHourValue}} />) : (<High />)}
        </>
    );
}

export default Footer;