const Cards = ({ item }) => {
  console.log(item.image);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-98 md:w-80 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
