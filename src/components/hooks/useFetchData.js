import React, { useEffect, useState } from "react";

import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getData = async () => {
    const { data, isLoading } = await fetchData(endpoint);

    setData(data);
    setIsloading(isLoading);
  };

  useEffect(() => {
    getData();
  }, [endpoint]);
  return { data, isLoading };
};
