import Card from '../../components/Card';


const List = () => {
    return (
        <div className="container">
        <div className="col-xs-12 col-md-6 offset-md-3">
            <h1 className="text-center mt-3 mb-5">Lista de Desejos</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Novo desejo" />
                <button class="btn btn-success" type="button">adicionar</button>
            </div>
        </div>
        <div className="row mt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>
    );

};


export default List;