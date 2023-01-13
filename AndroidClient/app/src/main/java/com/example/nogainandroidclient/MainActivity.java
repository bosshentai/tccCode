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







    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.user_menu,menu);
        return true;
//        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()){
            case R.id.moveToEmployee:
                Intent moveEmployeeIntent = new Intent(MainActivity.this,EmployeeActivity.class);
                startActivity(moveEmployeeIntent);
                return true;
            default:
                return  super.onOptionsItemSelected(item);
        }
//        return super.onOptionsItemSelected(item);
    }
}