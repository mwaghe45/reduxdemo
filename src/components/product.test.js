import Products from "./Products";
import { fetchProducts } from "../store/productSlice";
import { render } from "@testing-library/react";

describe("get product api testing", () => {
  it("product are present", () => {
    const testData = {
      category: "men's clothing",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    };
    const response = { json: jest.fn().mockResolvedValue(testData) };
    console.log(response);
    global.fetch = jest.fn().mockResolvedValue(response);

    return fetchProducts().then((data) => {
      expect(data).toEqual(testData);
    });
  });
});
