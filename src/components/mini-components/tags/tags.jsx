import './tags.css';


function Tags(labels) {
  return (
    <div className="postdetails__tags container">
      <p className="postdetails__tagsname heading6">Tags: </p>
      {Object.values(labels.labels).map(tag => {
        return (
          <button
            key={tag.id}
            className="btn btn--transparent">
            <p className="btnolivetext heading6">{tag.title}</p>
          </button>
        )
      })}
    </div>
  );
}

export default Tags;
