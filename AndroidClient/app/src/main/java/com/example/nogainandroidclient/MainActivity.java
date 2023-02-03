package com.example.nogainandroidclient;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getSupportActionBar().setTitle("");







    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.user_menu,menu);
        return true;

    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()){
            case R.id.moveToEmployee:
                Intent moveEmployeeIntent = new Intent(MainActivity.this,EmployeeActivity.class);
                startActivity(moveEmployeeIntent);
                return true;
            case R.id.moveToClient:
                Intent moveClientIntent = new Intent(MainActivity.this,ClientActivity.class);
                startActivity(moveClientIntent);
                return true;
            default:
                return  super.onOptionsItemSelected(item);
        }
//        return super.onOptionsItemSelected(item);
    }
}