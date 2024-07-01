'use client'
import RestaurantForm from "@/components/RestaurantForm";
import RestaurantList from "@/components/RestaurantList";
import { useEffect, useState } from "react";

export interface DataType {
  key: string;
  name: string;
  email: string;
  address: string;
  description: string;
}

export default function Home() {
  const [restaurantList, setRestaurantList] = useState<DataType[]>([]);
  const [ editData, setEditData] = useState<DataType>();

  useEffect(() => {
    if(editData) {
      setEditData(undefined)
    }
  }, [restaurantList])

  const onEditRestaurant = (data: DataType) => {
    setEditData(data);
  }

  const onDeleteRestaurant = (key: string) => {
    const newData = restaurantList.filter((item) => item?.key !== key);
    setRestaurantList(newData);
  }

  return (
    <div className='px-8 xl:px-20 mb-20'>
      <RestaurantForm {...{setRestaurantList, editData}} />
      <RestaurantList  {...{restaurantList, onDeleteRestaurant, onEditRestaurant }} />
    </div>
  );
}
