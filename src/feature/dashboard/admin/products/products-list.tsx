import { CreateProductModal } from "./create-product-modal";

const ProductsList = () => {
  return (
    <div>
      <div className="flex justify-end items-center">
        <CreateProductModal />
      </div>
      <div></div>
    </div>
  );
};

export default ProductsList;
