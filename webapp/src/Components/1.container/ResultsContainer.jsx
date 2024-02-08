/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function ResultsContainer() {
  const [PageNum, setPageNum] = useState(1);
  return (
    <div>
      hello this is ResultsContainer
    </div>
  );
}
