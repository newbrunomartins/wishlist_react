const Card = () =>{
    return (
        <div class="card col-xs-12 col-md-3 mb-4">
        <img src="https://picsum.photos/500/350" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-danger">Remover da lista</a>
        </div>
        </div>
    )
}

export default Card;