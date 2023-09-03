import React from "react";

function Users({ isLoading, items }) {
  return (
    <div>
      {isLoading ? (
        <div id="loading">Loading...</div>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="user">
              {item.name.first}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;
