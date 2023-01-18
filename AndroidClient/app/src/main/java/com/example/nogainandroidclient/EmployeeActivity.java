package com.example.nogainandroidclient;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.example.nogainandroidclient.adapter.EmployeeRecyclerViewAdapter;
import com.example.nogainandroidclient.models.Employee;
import com.example.nogainandroidclient.utils.ClientServices;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class EmployeeActivity extends AppCompatActivity {

    private final String LOG_TAG = EmployeeActivity.class.getSimpleName();

    private RecyclerView employeeRecycleView;

    private ArrayList<Employee> employeeList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_employee);
        getSupportActionBar().setTitle("Funcionarios");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        employeeRecycleView = findViewById(R.id.employeeRecycleView);

        setEmployeeData();


    }

    public void newEmployeeHandler(View view) {
        Intent moveToAddEmployeeIntent = new Intent(EmployeeActivity.this, CreateEmployeeActivity.class);
        startActivity(moveToAddEmployeeIntent);
    }


    private void setEmployeeData(){

        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:5000/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();

        ClientServices services = retrofit.create(ClientServices.class);

        Call<ArrayList<Employee>> call = services.allEmployee();

        call.enqueue(new Callback<ArrayList<Employee>>() {
            @Override
            public void onResponse(Call<ArrayList<Employee>> call, Response<ArrayList<Employee>> response) {

                if(!response.isSuccessful()){
                    Log.e(LOG_TAG,"OnResponse: " + response.code());
                }else{
                    Log.d(LOG_TAG,"onResponse: " + response.body());
                    employeeList = (ArrayList<Employee>) response.body();

                    EmployeeRecyclerViewAdapter adapter = new EmployeeRecyclerViewAdapter(EmployeeActivity.this,employeeList);

                    employeeRecycleView.setAdapter(adapter);
                    employeeRecycleView.setLayoutManager(new LinearLayoutManager(EmployeeActivity.this));


                }
            }

            @Override
            public void onFailure(Call<ArrayList<Employee>> call, Throwable t) {
                Log.e(LOG_TAG,"OnFailure"+ t.getMessage());
            }
        });



    }
}