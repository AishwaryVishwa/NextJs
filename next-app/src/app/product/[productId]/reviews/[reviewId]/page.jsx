export default function Review({params}){

    console.log(params);
    
    return <h1>This  review  ,  {params.reviewId} is for {params.productId}</h1>
}