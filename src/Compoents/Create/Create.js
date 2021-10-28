import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { Input, Button } from "antd";
import { v4 as uuidv4 } from "uuid";

import "./Create.scss";
import { MainContext } from "../../Context/Context";

const { TextArea } = Input;

const Create = ({ type }) => {
  let { id } = useParams();
  let history = useHistory();
  const { setTodoList, todoList,setTabActive } = useContext(MainContext);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (id) {
      todoList.map((val) => {
        if (val.key === id) {
          setInputVal(val.data);
        }
      });
    }
  }, []);

  const handleCreateClick = () => {
    const obj = {
      key: uuidv4(),
      data: inputVal,
      done: false,
    };
    setTodoList((prev) => [...prev, obj]);
    setTimeout(() => {
      setInputVal("");
      history.push("/List");
      setTabActive("list");
    }, 500);
  };

  const handleEditClick = () => {
    todoList.map((val) => {
      if (val.key === id) {
        val.data = inputVal;
      }
    });
    setTodoList(todoList);
    setTimeout(() => {
      setInputVal("");
      history.push("/List");
    }, 500);
  };

  return (
    <div className="textArea--container">
      <div className="textArea--header">
        <p>{type === "edit" ? "Update Note" : "Create Note"}</p>
      </div>
      <div className="textArea--input">
        <TextArea
          rows={8}
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <div className="textArea--button">
          <Button
            type="primary"
            onClick={() => {
              type === "edit" ? handleEditClick() : handleCreateClick();
            }}
          >
            {type === "edit" ? "Edit" : "Create"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
