export const Logo = () =>{
    const logo = require('../../images/logo.png');
    return(
        <img alt='logo' style={{ width: 100 }} src={String(logo)} />
    )
    
}