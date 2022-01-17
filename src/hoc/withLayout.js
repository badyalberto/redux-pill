import React from "react";
import "./withLayout.css";
import Navbar from "../components/Navbar/Navbar";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <>
        <div className="main-container w-full 2xl:w-9/12">
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
