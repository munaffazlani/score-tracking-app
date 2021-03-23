import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/gameData/actions";
import LoadingWrapper from "../components/LoadingWrapper";

function EmployeeDetailPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getEmployees());
  }, []);
  const { selectedEmployeeDetail, loading, error } = useSelector(
    (state) => state.employees
  );
  return (
    <LoadingWrapper loading={!loading && selectedEmployeeDetail} error={error}>
      All team scores will be displayed here
    </LoadingWrapper>
  );
}

export default EmployeeDetailPage;
