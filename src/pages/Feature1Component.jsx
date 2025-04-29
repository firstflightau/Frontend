import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchData,
  increment,
  decrement,
} from "../redux/slices/feature1/feature1Slice";

const Feature1Component = () => {
  const dispatch = useAppDispatch();
  const { value, data, loading, error } = useAppSelector(
    (state) => state.feature1
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Feature 1</h1>
      <p>Value: {value}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <h2 className="text-lg font-semibold mt-4">Async Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature1Component;
