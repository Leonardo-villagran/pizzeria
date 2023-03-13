import Badge from 'react-bootstrap/Badge';

//Vista de datos del footer
const Footer = () => {
    
    const nombreFooter = "@Leonardo-Villagrán" ;
    const emailFooter ="mailto:leonardovillagran@yahoo.com";
    return (
        <div className='p-2 m-4 text-center'>
            <a href={emailFooter}><Badge bg="secondary p-2">{nombreFooter}</Badge></a>
        </div>);
};
export default Footer;