import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/gameData/actions";
import ScoreCounter from "../components/scoreCounter";
import LoadingWrapper from "../components/LoadingWrapper";

function EmployeeDetailPage() {
  const dispatch = useDispatch();

  const { gameDetails, loading, error } = useSelector(
    (state) => state.gameData
  );
  console.log(loading);
  return (
    <LoadingWrapper loading={loading} error={error}>
      <ScoreCounter />
    </LoadingWrapper>
  );
}

export default EmployeeDetailPage;
