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

import com.example.nogainandroidclient.EmployeeActivity;
import com.example.nogainandroidclient.R;
import com.example.nogainandroidclient.models.Employee;
import com.example.nogainandroidclient.utils.ClientServices;

import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class EmployeeRecyclerViewAdapter
        extends RecyclerView.Adapter<EmployeeRecyclerViewAdapter.EmployeeViewHolder> {

    private Context context;
    private ArrayList<Employee> mEmployeeList;

    private final String LOG_TAG = EmployeeActivity.class.getSimpleName();

    public EmployeeRecyclerViewAdapter(Context context, ArrayList<Employee> mEmployeeList) {
        this.context = context;
        this.mEmployeeList = mEmployeeList;
    }


    @NonNull
    @Override
    public EmployeeRecyclerViewAdapter.EmployeeViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        LayoutInflater inflater = LayoutInflater.from(context);

        View view = inflater.inflate(R.layout.employee_item_recycler_view_adapter, parent, false);
        return new EmployeeRecyclerViewAdapter.EmployeeViewHolder(view);
//        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull EmployeeRecyclerViewAdapter.EmployeeViewHolder holder, int position) {

        holder.fullName.setText(mEmployeeList.get(position).getName());
        holder.email.setText(mEmployeeList.get(position).getEmail());
        holder.status.setText(mEmployeeList.get(position).getStatus().toString());

    }

    @Override
    public int getItemCount() {

        if (mEmployeeList != null) {
            return mEmployeeList.size();
        }

        return 0;
    }

    public  class EmployeeViewHolder extends RecyclerView.ViewHolder implements View.OnCreateContextMenuListener {

        private TextView fullName, email, status;


        public EmployeeViewHolder(@NonNull View itemView) {
            super(itemView);

            fullName = itemView.findViewById(R.id.employeeItemFullName);
            email = itemView.findViewById(R.id.employeeItemEmail);
            status = itemView.findViewById(R.id.employeeItemStatus);

            // Make The ContextMenu show
            itemView.setOnCreateContextMenuListener(this);

        }


        @Override
        public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
            menu.add(0, itemView.getId(), 0, "Chamar").setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                @Override
                public boolean onMenuItemClick(MenuItem item) {

                    int permisionCheck = ContextCompat.checkSelfPermission(context, Manifest.permission.CALL_PHONE);

                    if (permisionCheck != PackageManager.PERMISSION_GRANTED) {
                        ActivityCompat.requestPermissions((Activity) context, new String[]{Manifest.permission.CALL_PHONE}, 100);
                    } else {
                        Retrofit.Builder builder = new Retrofit.Builder()
                                .baseUrl("http://10.0.2.2:5000/")
                                .addConverterFactory(GsonConverterFactory.create());
                        Retrofit retrofit = builder.build();
                        ClientServices clientServices = retrofit.create(ClientServices.class);
                        Call<Employee> call = clientServices.getOneEmployee(mEmployeeList.get(getLayoutPosition()).getId());

                        call.enqueue(new Callback<Employee>() {
                            @Override
                            public void onResponse(Call<Employee> call, Response<Employee> response) {
                                if (!response.isSuccessful()) {
                                    Log.e(LOG_TAG, "onResponse: " + response.code());
                                    Log.e(LOG_TAG, "onResponse: " + response.message());
                                } else {
                                    Employee employee = response.body();
                                    String phoneNumber = "tel: " + employee.getPhone();
//                                    Log.d(LOG_TAG,"" + phoneNumber);
                                    Intent moveToCallIntent = new Intent(Intent.ACTION_CALL, Uri.parse(phoneNumber));
                                    if (moveToCallIntent.resolveActivity(context.getPackageManager()) != null) {
                                        context.startActivity(moveToCallIntent);
                                    } else {
                                        Log.d(LOG_TAG, "Can't handle this");
                                    }
                                }
                            }

                            @Override
                            public void onFailure(Call<Employee> call, Throwable t) {
                                Log.e(LOG_TAG, "onFailure: " + t.getMessage());
                            }
                        });

                    }
                    return false;
                }
            });
            menu.add(0, itemView.getId(), 0, "SMS").setOnMenuItemClickListener(new MenuItem.OnMenuItemClickListener() {
                @Override
                public boolean onMenuItemClick(MenuItem item) {
                    Retrofit.Builder builder = new Retrofit.Builder()
                            .baseUrl("http://10.0.2.2:5000/")
                            .addConverterFactory(GsonConverterFactory.create());
                    Retrofit retrofit = builder.build();
                    ClientServices clientServices = retrofit.create(ClientServices.class);
                    Call<Employee> call = clientServices.getOneEmployee(mEmployeeList.get(getLayoutPosition()).getId());

                    call.enqueue(new Callback<Employee>() {
                        @Override
                        public void onResponse(Call<Employee> call, Response<Employee> response) {
                            if (!response.isSuccessful()) {
                                Log.e(LOG_TAG, "onResponse: " + response.code());
                                Log.e(LOG_TAG, "onResponse: " + response.message());
                            } else {
                                Employee employee = response.body();
                                String phoneNumber = "tel: " + employee.getPhone();
                                Intent moveToSMS = new Intent(Intent.ACTION_VIEW, Uri.fromParts("sms", phoneNumber, null));
                                if (moveToSMS.resolveActivity(context.getPackageManager()) != null) {
                                    context.startActivity(moveToSMS);
                                } else {
                                    Log.d(LOG_TAG,"Can't handle this");
                                }
                            }
                        }

                        @Override
                        public void onFailure(Call<Employee> call, Throwable t) {
                            Log.e(LOG_TAG, "onFailure: " + t.getMessage());
                        }
                    });


                    return false;
                }
            });
        }


    }
}
