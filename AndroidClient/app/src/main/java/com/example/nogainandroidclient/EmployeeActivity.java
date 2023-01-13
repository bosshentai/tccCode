package com.example.nogainandroidclient;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class EmployeeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_employee);
    }

    public void newEmployeeHandler(View view) {
        Intent moveToAddEmployeeIntent = new Intent(EmployeeActivity.this, CreateEmployeeActivity.class);
        startActivity(moveToAddEmployeeIntent);
    }
}