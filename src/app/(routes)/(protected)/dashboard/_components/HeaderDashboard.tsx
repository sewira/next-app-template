"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {};

export interface UserType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const HeaderDashboard = (props: Props) => {
  const fetchDummy = async () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => json);
  };

  const { isLoading, error, data } = useQuery<UserType, Error>({
    queryKey: ["tableDashboard"],
    queryFn: fetchDummy,
  });

  return <div className="mb-4 ">{isLoading ? "loading..." : data?.title}</div>;
};

export default HeaderDashboard;
