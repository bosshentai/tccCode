package com.example.nogainandroidclient.adapter;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Log;
import android.view.ContextMenu;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.RecyclerView;

import com.example.nogainandroidclient.ClientActivity;
import com.example.nogainandroidclient.R;
import com.example.nogainandroidclient.models.Client;
import com.example.nogainandroidclient.utils.ClientServices;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ClientRecyclerViewAdapter
extends RecyclerView.Adapter<ClientRecyclerViewAdapter.ClientViewHolder> {

    private Context context;
    private ArrayList<Client> mClientList;

    private final String LOG_TAG = ClientActivity.class.getSimpleName();

    public ClientRecyclerViewAdapter(Context context, ArrayList<Client> mClientList) {
        this.context = context;
        this.mClientList = mClientList;
    }

    @NonNull
    @Override
    public ClientRecyclerViewAdapter.ClientViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        LayoutInflater inflater = LayoutInflater.from(context);

        View view = inflater.inflate(R.layout.client_item_recycler_view_adapter,parent,false);


        return new ClientRecyclerViewAdapter.ClientViewHolder(view);
//        return new EmployeeRecyclerViewAdapter.EmployeeViewHolder(view);

//        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull ClientRecyclerViewAdapter.ClientViewHolder holder, int position) {

        holder.fullName.setText(mClientList.get(position).getName());
        holder.email.setText(mClientList.get(position).getEmail());
        holder.trainingType.setText(mClientList.get(position).getTrainPlan());
    }

    @Override
    public int getItemCount() {

        if(mClientList != null){
            return mClientList.size();
        }

        return 0;
    }


    public class ClientViewHolder extends RecyclerView.ViewHolder implements View.OnCreateContextMenuListener {


        private TextView fullName, email, trainingType;

        public ClientViewHolder(@NonNull View itemView) {
            super(itemView);

            fullName = itemView.findViewById(R.id.clientItemFullName);
            email   = itemView.findViewById(R.id.clientItemEmail);
            trainingType = itemView.findViewById(R.id.clientItemTraining);

            itemView.setOnCreateContextMenuListener(this);
        }


        @Override
        public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
            menu.add(0,itemView.getId(),0,"Chamar").setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                @Override
                public boolean onMenuItemClick(MenuItem item) {
                    int permisionCheck = ContextCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE);

                    if(permisionCheck != PackageManager.PERMISSION_GRANTED){
                        ActivityCompat.requestPermissions((Activity) context, new String[]{Manifest.permission.CALL_PHONE}, 100);

                    }else{
                        Retrofit.Builder builder = new Retrofit.Builder()
                                .baseUrl("http://10.0.2.2:5000/")
                                .addConverterFactory(GsonConverterFactory.create());
                        Retrofit retrofit = builder.build();

                        ClientServices clientServices = retrofit.create(ClientServices.class);

//                        Log.d(LOG_TAG,mClientList.get(getLayoutPosition()).getId());
                        Call<Client> call = clientServices.getOneClient(mClientList.get(getLayoutPosition()).getId());

                        call.enqueue(new Callback<Client>() {
                            @Override
                            public void onResponse(Call<Client> call, Response<Client> response) {
                                if(!response.isSuccessful()){
                                    Log.e(LOG_TAG, "onResponse: " + response.code());
                                    Log.e(LOG_TAG,"onResponse: " + response.message());
                                }else{
                                    Client client = response.body();
                                    String phoneNumber = "tel: " + client.getPhone();
                                    Intent moveToCallIntent = new Intent(Intent.ACTION_CALL, Uri.parse(phoneNumber));
                                    if(moveToCallIntent.resolveActivity(context.getPackageManager()) != null){
                                        context.startActivity(moveToCallIntent);
                                    }else{
                                        Log.d(LOG_TAG,"Can't handle this");
                                    }

                                }
                            }

                            @Override
                            public void onFailure(Call<Client> call, Throwable t) {
                                Log.d(LOG_TAG,"Cant handle this");
                            }
                        });

                    }

                    return false;
                }
            });

            menu.add(0, itemView.getId(),0,"SMS").setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                @Override
                public boolean onMenuItemClick(MenuItem item) {
                    Retrofit.Builder builder = new Retrofit.Builder()
                            .baseUrl("http://10.0.2.2:5000/")
                            .addConverterFactory(GsonConverterFactory.create());
                    Retrofit retrofit = builder.build();
                    ClientServices clientServices = retrofit.create(ClientServices.class);
                    Call<Client> call = clientServices.getOneClient(mClientList.get(getLayoutPosition()).getId());

                    call.enqueue(new Callback<Client>() {
                        @Override
                        public void onResponse(Call<Client> call, Response<Client> response) {

                            if(!response.isSuccessful()){
                                Log.e(LOG_TAG,"onResponse: " + response.code());
                                Log.e(LOG_TAG, "OnResponse: " + response.message());
                            }else{
                               Client client = response.body();
                               String phoneNumber = "tel: " +  client.getPhone();
                               Intent moveToSMS = new Intent(Intent.ACTION_VIEW, Uri.fromParts("sms",phoneNumber,null));
                               if(moveToSMS.resolveActivity(context.getPackageManager()) != null){
                                   context.startActivity(moveToSMS);
                               }else{
                                   Log.d(LOG_TAG,"Can't handle this");
                               }
                            }


                        }

                        @Override
                        public void onFailure(Call<Client> call, Throwable t) {
                            Log.e(LOG_TAG, "onFailure" + t.getMessage());
                        }
                    });

                    return false;
                }
            });
        }
    }
}
