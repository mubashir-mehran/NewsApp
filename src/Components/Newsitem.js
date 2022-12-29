//import { title } from 'process'
import React from 'react'

const Newsitem = (props) => {

  let { title, description, imageURl, newsURl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
          <span className=" badge rounded-pill bg-danger">
            {source}</span> </div>
        <img src={!imageURl ? 'https://c.ndtvimg.com/2022-11/4sjn24hg_china-nuclear_625x300_26_November_22.jpg' : imageURl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsURl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem