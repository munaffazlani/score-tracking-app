import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AntdButton from "../AntdButton";
import InputBox from "../InputBox";
import AntdFormWraper from "../AntdFormWrapper";
import actions from "../../redux/gameData/actions";
import "antd/dist/antd.css";
import { Link, useHistory } from "react-router-dom";

function CreateTeamForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    console.log(values);
    dispatch(actions.setGameDetails(values));
    history.push("/trackscore");
  };

  return (
    <AntdFormWraper
      name="createTeam"
      onFinish={onFinish}
      initialValues={{
        player1Name: "",
        player2Name: "",
      }}
    >
      <InputBox
        rules={[
          {
            required: true,
            message: "Please input player name!",
          },
        ]}
        name="player1Name"
        label="Player 1"
      />
      <InputBox
        rules={[
          {
            required: true,
            message: "Please input player name!",
          },
        ]}
        name="player2Name"
        label="Player 2"
      />
      <AntdButton />
    </AntdFormWraper>
  );
}

export default CreateTeamForm;
