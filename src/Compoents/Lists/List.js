import React, { useContext } from "react";
import { MainContext } from "../../Context/Context";
import ListComponent from "./ListComponent/ListComponent";

const List = () => {
  const { todoList } = useContext(MainContext);
  
  return (
    <div>
      {Array.isArray(todoList) && todoList.length > 0 ? (
        <div>
          <div>
            <p className="mt-10 font-size-16">Todo List</p>
          </div>
          <div>
            {todoList.map((listVal) => {
              return <ListComponent value={listVal} />;
            })}
          </div>
        </div>
      ) : (
        <p className="mt-10 font-size-16">No data to display</p>
      )}
    </div>
  );
};

export default List;
