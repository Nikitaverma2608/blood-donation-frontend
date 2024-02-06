import React, {useEffect, useState} from 'react';
import Layout from '../../components/shared/Layout/Layout';
import API from '../../services/API';
import moment from 'moment';

const User = () => {
    const [data, setData] = useState([]);

    //find user records
    const getUsers = async () => 
    {
        try {
            const {data} = await API.get('/inventory/get-users');
            //console.log(data);
            if(data?.success)
            {
                setData(data?.users);
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
      
    })
  return (
    <Layout>
      
      <h1 style={{padding: "10px"}}>User page</h1>
      <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Date</th>
                  
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.name || record.organisationName || record.hospitalName + " (HOSPITAL)"}</td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </Layout>
  )
}

export default User;
