package com.example.nogainandroidclient;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;

import com.example.nogainandroidclient.adapter.ClientRecyclerViewAdapter;
import com.example.nogainandroidclient.adapter.EmployeeRecyclerViewAdapter;
import com.example.nogainandroidclient.models.Client;
import com.example.nogainandroidclient.utils.ClientServices;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ClientActivity extends AppCompatActivity {


    private final String LOG_TAG = ClientActivity.class.getSimpleName();

    private RecyclerView clientRecycleView;

    private ArrayList<Client> clientList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_client);
        getSupportActionBar().setTitle("Clientes");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        clientRecycleView = findViewById(R.id.clientRecycleView);

        setClientData();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.client_menu,menu);
        return true;
    }


    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()){
            case R.id.moveToEmployee:
                Intent moveEmployeeIntent = new Intent(ClientActivity.this, EmployeeActivity.class);
                startActivity(moveEmployeeIntent);
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }

    private void setClientData() {
        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:5000/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();

        ClientServices services = retrofit.create(ClientServices.class);
        Call<ArrayList<Client>> call = services.allClient();

        call.enqueue(new Callback<ArrayList<Client>>() {
            @Override
            public void onResponse(Call<ArrayList<Client>> call, Response<ArrayList<Client>> response) {

                if (!response.isSuccessful()) {
                    Log.e(LOG_TAG, "OnResponse: " + response.code());
                } else {
                    Log.d(LOG_TAG, "OnResponse " + response.body());
                    clientList = (ArrayList<Client>) response.body();

                    ClientRecyclerViewAdapter adapter = new ClientRecyclerViewAdapter(ClientActivity.this, clientList);

                    clientRecycleView.setAdapter(adapter);
                    clientRecycleView.setLayoutManager(new LinearLayoutManager(ClientActivity.this));

                }
            }

            @Override
            public void onFailure(Call<ArrayList<Client>> call, Throwable t) {
                Log.e(LOG_TAG, "OnFailure" + t.getMessage());
            }
        });
    }
}