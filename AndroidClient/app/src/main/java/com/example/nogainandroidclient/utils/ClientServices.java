package com.example.nogainandroidclient.utils;

import com.example.nogainandroidclient.models.Employee;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface ClientServices {

    @POST("/employee/add")
    Call<ResponseBody> createEmployee(@Body Employee employee);

}
