import High from './high';
import Low from './low';

function Footer(props) {
    
    return (
        <>
            {props.radioValue === 'Low' ? (<Low {...props} />) : 
            (<High currentPrice={props.currentPrice} worstTimeRange={props.worstTimeRange} />)}
        </>
    );
}

export default Footer;