export const Menu = (props) =>{
    return(
        <>
        <div className="menu-section">
            <img src={`/icons/${props.icon}`}/>
            <div className="menu-title">
                <h3>{props.title1} &nbsp;<span>{props.title2}</span></h3>
            </div>
        </div>
        </>
    );
}