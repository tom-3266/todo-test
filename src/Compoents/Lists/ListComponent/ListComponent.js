import React, { useContext } from "react";
import { Button, Modal, Checkbox, Tooltip } from "antd";
import { useHistory } from "react-router";
import { MainContext } from "../../../Context/Context";

import "./ListComponent.scss";

const { confirm } = Modal;

const ListComponent = ({ value }) => {
  let history = useHistory();
  const { todoList, setTodoList, setTabActive } = useContext(MainContext);

  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete?",
      content: `${value.data}`,
      width: "500px",
      onOk() {
        let tempDat = todoList;
        setTodoList(tempDat.filter((x) => x.key !== value.key));
      },
      onCancel() {
        // console.log("Cancel");
      },
    });
  };

  const handleEdit = (key) => {
    let urlVal = `/Update/${key}`;
    history.push(urlVal);
    setTabActive("edit");
  };
  const onChange = (key) => {
    let tempArray = [...todoList];
    if (Array.isArray(tempArray)) {
      tempArray.map((val) => {
        if (val.key === key) {
          val.done = !val.done;
        }
      });
    }

    setTodoList(tempArray);
  };
  return (
    <div className="listComponent--container">
      <div className="flex">
        <Tooltip title="Check to strike">
          <Checkbox
            onChange={(e) => {
              onChange(value.key);
            }}
            checked={value.done}
          ></Checkbox>
        </Tooltip>
        <p
          className={
            value.done
              ? `listComponent--heading ml-10 strike`
              : `listComponent--heading ml-10`
          }
        >
          {value.data}
        </p>
      </div>
      <div className="listComponent--list">
        <Button type={"danger"} onClick={showConfirm}>
          Delete
        </Button>
        <Button
          type={"primary"}
          className="ml-10"
          onClick={() => {
            handleEdit(value.key);
          }}
          disabled={value.done}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ListComponent;
