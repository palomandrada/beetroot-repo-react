
export default function Grid (props) {
    const movies = props.movies // props is what we call the options we give to a component 

    return (
    <div className="container grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                movies.map(el => {
                    return (
                        <div className='col'>
                            <div className='card shadow-sm'>
                                <img src={`https://image.tmdv.org/t/p/w500${el.poster_path}`} className='bd-placeholder-img card-img-top'/>
                                <div>
                                    <h2>{el.title}</h2>
                                    <p className='card-text'>{el.overview}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}