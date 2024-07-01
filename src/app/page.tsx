import RestaurantForm from "@/components/RestaurantForm";
import RestaurantList from "@/components/RestaurantList";
import Image from "next/image";

export default function Home() {
  return (
    <div className='px-8 xl:px-20 mb-20'>
      <RestaurantForm />
      hello
      {/* Translation History */}
      <RestaurantList />

    </div>
  );
}
