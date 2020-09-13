import React from "react";
import "./ad2.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Ad2() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="ad2">
      {!user ? (
        <h2>Sign in for the best experience</h2>
      ) : (
        <h2>Welcome back {user?.email}</h2>
      )}

      {!user ? (
        <Link to="/login">
          <button>Sign in securely</button>
        </Link>
      ) : (
        <Link to="/checkout">
          <button>View {basket?.length} items your basket</button>
        </Link>
      )}
    </div>
  );
}

export default Ad2;
