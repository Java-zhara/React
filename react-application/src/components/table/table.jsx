import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table as AntTable, Alert, Switch, Spin } from "antd";

import { columns } from "./columns";

import "./table.css";

export const Table = () => {
  const dispatch = useDispatch();

  const [isTableVisible, setIsTableVisible] = useState(false);

  const {
    tableData: json,
    isError,
    isLoading,
    errorMessage,
  } = useSelector((state) => state.table);

  const onButtonClick = (bool) => {
    setIsTableVisible(bool);
    if (bool) {
      dispatch({ type: "GET_TABLE_DATA_REQUEST" });
    }
  };

  return (
    <div>
      <Switch
        onChange={onButtonClick}
        checkedChildren="Скрыть данные"
        unCheckedChildren="Показать данные"
      />
      {isError && (
        <Alert
          message="ERROR"
          description={errorMessage}
          type="error"
          showIcon
        />
      )}
      {isLoading && (
        <Spin tip="Loading...">
          <Alert message="Подождите пока загрузятся данные" type="info" />
        </Spin>
      )}
      {isTableVisible && <AntTable columns={columns} dataSource={json} />}
    </div>
  );
};
