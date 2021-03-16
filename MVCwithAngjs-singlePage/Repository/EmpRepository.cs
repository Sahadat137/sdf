using MVCwithAngjs_singlePage.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Script.Serialization;
using System.Text;
using System.Web;
using System.Web.Http.Results;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace MVCwithAngjs_singlePage.Repository
{
    public class EmpRepository : Controller
    {
       // private SqlConnection con;
       //// private object SqlMapper;

       // //To Handle connection related activities
       // private void connection()
       // {
       //     string constr = ConfigurationManager.ConnectionStrings["dbCon"].ToString();
       //     con = new SqlConnection(constr);

       // }
        //To Add Employee details
        //public bool AddEmployee(EmpModel obj)
        //{

        //    connection();
        //    SqlCommand com = new SqlCommand("AddNewEmpDetails", con);
        //    com.CommandType = CommandType.StoredProcedure;
        //    com.Parameters.AddWithValue("@Name", obj.Name);
        //    com.Parameters.AddWithValue("@Age", obj.Age);

        //    con.Open();
        //    int i = com.ExecuteNonQuery();
        //    con.Close();
        //    if (i >= 1)
        //    {

        //        return true;

        //    }
        //    else
        //    {

        //        return false;
        //    }


        //}

        
    }
}