import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container ">
        <div className="d-felx flex-column justify-content-center mt-4">
          <h1>
            Welcome Admin <i className="text-primary">{user?.name}</i> !
          </h1>
          <br />
          <h3>Manage BloodGuardian Website </h3>
          <hr />
          <p>
        As an administrator, you have access to powerful tools and functionalities to manage the Blood Bank application.
      </p>

  

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;