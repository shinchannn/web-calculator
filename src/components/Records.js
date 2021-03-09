import React from "react";

const LIMIT = 10; // max number of records

const Records = ({ records }) => {
  const renderedRecords = () => {
    return records.map((r) => {
      return (
        <div className="item">
          {r.username ? (
            <i className="google plus icon"></i>
          ) : (
            <i className="question circle icon"></i>
          )}
          <div className="content">
            <div className="header">
              {r.username ? r.username : "Anonymous"}
            </div>
            {r.text}
          </div>
          <div className="right floated content">{r.createdTime}</div>
        </div>
      );
    });
  };
  return <div className="ui list">{renderedRecords().slice(0, LIMIT)}</div>;
};

export default Records;
