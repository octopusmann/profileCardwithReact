function ProfileCard ({title, header, image,description})
{

return(

    <div className ="card">
       <div className="card-image">
        <figure className=" image is-1by1">
            <img src={image} alt="ai-assistants-logo"></img>
        </figure>
        </div>

    <div className="card-content">
        <div className="media-content">

        <div className="title is-4"> Name is {title}  </div>
        <div className="subtitle is-6">Username is {header} </div>
        </div>

    </div>

    <div className="content">{description}</div>
    </div>

);

}

export default ProfileCard;