import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch("https://insta-sohor-server.vercel.app/wishlist")
      .then((response) => response.json())
      .then((data) => {
        setWishlistItems(data);
      });
  }, []);

  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://insta-sohor-server.vercel.app/wishlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Done!", "Post has been removed.", "success");
              setWishlistItems(
                wishlistItems.filter((item) => item._id !== _id)
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="lg:text-2xl text-center font-semibold m-3">
          Wishlist : {wishlistItems.length} posts
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((wishlistItem) => (
          <WishlistItem
            key={wishlistItem._id}
            wishlistItem={wishlistItem}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
