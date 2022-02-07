function Results(props) {
    const {avatar_url, login, type} = props.single
    return(
        <>
            <div className="single-dev">
                <div className="profile">
                    <a href="#"><img src={avatar_url} className="img-fluid" alt=""/></a>
                </div>
                <div className="dev-detail">
                    <div className="col-12 col-md-8 d-md-flex">
                        <div className="col-md-6">
                            <div className="profile-detail">
                                <h3><a href="#">{login}</a></h3>
                                <p><a href="#">{type}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Results