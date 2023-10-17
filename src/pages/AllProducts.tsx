import Loader from "components/Loader";
import ParticlesComponent from "components/Particles";
import TrendsCard from "components/TrendsCard";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  cheapest_product,
  expensivest_product,
  getProductsFromServer,
  selectProduct,
} from "store/productSlice";

const AllProducts = () => {
  const products = useAppSelector(selectProduct);

  const dispatch = useAppDispatch();

  const [filterStatus, setFilterStatus] = useState("all");

  const [skip, setSkip] = useState(9);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [more, _setMore] = useState(true);

  useEffect(() => {
    dispatch(getProductsFromServer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  useEffect(() => {
    switch (filterStatus) {
      case "all": {
        dispatch(getProductsFromServer());
        break;
      }
      case "cheapest": {
        dispatch(cheapest_product());
        break;
      }
      case "expensivest": {
        dispatch(expensivest_product());
        break;
      }
      default: {
        console.log("error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus]);

  const addSkip = () => {
    setTimeout(() => {
      if (skip < 21) {
        setSkip((prev) => prev + 9);
      }
    }, 1000);
  };

  return (
    <>
      <div className="flex justify-between pt-10 items-end pb-10 flex-col lg:mx-10 sm-x2:!mx-5 mx-40">
        <p className="text-left sm-x2:mb-8 sm-x2:text-[22px] text-[#024742] text-4xl mb-16">
          All Products
        </p>
        <select
          onChange={selectHandler}
          className="bg-transparent sm-x2:mb-16 sm-x2:w-full w-[150px] text-[#024742] border-b-2 border-b-[#024742] text-sm block p-2.5 border-transparent outline-0 border-solid border-r-[10px] cursor-pointer dark:placeholder-gray-400"
        >
          <option value="all">All Products</option>
          <option value="cheapest">cheapest </option>
          <option value="expensivest">expensivest</option>
        </select>
      </div>

      <InfiniteScroll
        dataLength={skip}
        next={addSkip}
        hasMore={more}
        loader={
          <h4>
            {skip < 21 ? (
              <Loader />
            ) : (
              <p className="flex items-center justify-center">
                Yay! You have seen it all
              </p>
            )}
          </h4>
        }
        className="z-[9997] ProductInfiniteScroll !overflow-x-hidden mb-20 relative mt-10 sm-x2:mt-0 sm-x2:!grid-cols-[auto] grid gap-20 lg:justify-evenly sm:!grid-cols-[auto] lg:grid-cols-[auto,auto] lg:mx-8 sm-x2:!mx-5 grid-cols-[auto,auto,auto] justify-between mx-14"
        height={600}
      >
        {products &&
          products
            .slice(0, skip)
            .map((data) => <TrendsCard key={crypto.randomUUID()} {...data} />)}
      </InfiniteScroll>

      <ParticlesComponent color="#024742" />
    </>
  );
};

export default AllProducts;
