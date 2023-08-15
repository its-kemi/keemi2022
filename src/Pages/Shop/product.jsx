
const product=(props)=>{
    const{id,productName,productImg,price}=props.data
    return(
        <div className="col-3">
         <img src={props.data.productImg} className="w-600" />
         {productName}
         <p>price:{price}$</p>
         
         <button className="btn btn-info btn-sm">+</button>
         <button className="btn btn-info btn-sm">-</button>
        </div>
    )
}
export default product;