import React from "react";
import "./withLayout.css";
import Navbar from "../components/Navbar/Navbar";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <>
        <div className="main-container w-full 2xl:w-9/12 px-2">
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
