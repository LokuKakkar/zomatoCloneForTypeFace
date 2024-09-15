// delevery
import React,{useEffect} from "react";
import "../delivery/delivery.css";
import { useDispatch, useSelector } from 'react-redux';
import Filters from "../common/filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";
import { restaurants } from "../../data/restaurants";
import { fetchRestaurants } from '../../redux/slices/restaurantSlice';

const deliveryFilters = [
    // Define your filters, including functional ones for cuisines and ratings
    { id: 1, icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>, title: "Filters" },
    { id: 2, title: "4.0+", value: "4.0" },
    { id: 3, title: "Safe and Hygienic", value: "Safe and Hygienic" },
    { id: 4, title: "Pure Veg", value: "Pure Veg" },
    { id: 5, title: "Delivery Time", icon: <i className="fi fi-rr-apps-sort absolute-center"></i> },
    // { id: 6, title: "Great Offers", value: "Great Offers" }
    // { id: 6, title: "North Indian", value: "North Indian" },
    // { id: 7, title: "Desserts", value: "Desserts" },
    // { id: 8, title: "Italian", value: "Italian" },

];

const restaurantList = restaurants;

const Delivery = () => {

  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants(filters));
  }, [dispatch, filters]);

  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Order food online in India"
      />
      
    </div>
  );
};

export default Delivery;
