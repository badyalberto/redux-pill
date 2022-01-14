import React from "react";
import "./withLayout.css";
import Navbar from "../components/Navbar/Navbar";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <>
        <div className="main-container">
          <Navbar />
          <main>
            <WrappedComponent />
          </main>
        </div>
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
