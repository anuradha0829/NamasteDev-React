export const CardComponent =({data}) => {
    return(
        <div className="card">
            <div>
                <img className="logo" src="https://thumbs.dreamstime.com/b/bird-logo-vector-icon-flying-silhouette-illustration-isolated-white-background-119625470.jpg"></img>
            </div>
            <div>
                <div>Name:{data.Name}</div>
                <div>Place:{data.Place}</div>
                <div>Company:{data.company}</div>
                <div>Desgination:{data.Designation}</div>
            </div>
        </div>
    )
}