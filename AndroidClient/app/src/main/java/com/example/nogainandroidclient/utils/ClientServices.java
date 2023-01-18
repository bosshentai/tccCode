package com.example.nogainandroidclient.utils;

import com.example.nogainandroidclient.models.Client;
import com.example.nogainandroidclient.models.Employee;

import java.util.ArrayList;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ClientServices {

    @POST("/api/employee/add")
    Call<ResponseBody> createEmployee(@Body Employee employee);

    @GET("/api/employee/all")
    Call<ArrayList<Employee>> allEmployee();

    @GET("/api/employee/{id}")
    Call<Employee> getOneEmployee(@Path("id") String employeeId);



    //// Client
    @GET("/api/client/all")
    Call<ArrayList<Client>> allClient();

    @GET("/api/client/{id}")
    Call<Client> getOneClient(@Path("id") String clientId);
}
