package com.example.nogainandroidclient;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

public class MainActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setTitle("");







    }

    public void moveToClient(View view) {
        Intent moveToClientIntent = new Intent(MainActivity.this,ClientActivity.class);
        startActivity(moveToClientIntent);
    }

    public void moveToEmployee(View view) {
        Intent moveToEmployeeIntent = new Intent(MainActivity.this,EmployeeActivity.class);
        startActivity(moveToEmployeeIntent);
    }



}