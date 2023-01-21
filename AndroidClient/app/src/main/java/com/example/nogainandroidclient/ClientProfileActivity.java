package com.example.nogainandroidclient;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.example.nogainandroidclient.models.Client;
import com.example.nogainandroidclient.models.Payment;
import com.example.nogainandroidclient.utils.ClientServices;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ClientProfileActivity extends AppCompatActivity {
    private final String LOG_TAG = ClientProfileActivity.class.getSimpleName();

    private String clientId;

    private TextView fullNameTextView, emailTextView, birthTextView, trainPlanTextView,
            personalTrainerTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_client_profile);
        getSupportActionBar().setTitle("Perfil do Cliente");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        Intent getClientID = getIntent();

        clientId = getClientID.getStringExtra("clientId");

        fullNameTextView = findViewById(R.id.clientProfileFullName);
        emailTextView = findViewById(R.id.clientProfileEmail);
        birthTextView = findViewById(R.id.clientProfileBirth);
        trainPlanTextView = findViewById(R.id.clientProfileTrainPlan);
        personalTrainerTextView = findViewById(R.id.clientProfilePersonalTrainer);


//        Log.d(LOG_TAG,clientId);

        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:5000/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();
        ClientServices clientServices = retrofit.create(ClientServices.class);
        Call<Client> call = clientServices.getOneClient(clientId);

        call.enqueue(new Callback<Client>() {
            @Override
            public void onResponse(Call<Client> call, Response<Client> response) {
                if (!response.isSuccessful()) {
                    Log.e(LOG_TAG, "onResponse: " + response.code());
                    Log.e(LOG_TAG, "onResponse: " + response.message());

                } else {
                    Client client = response.body();
                    fullNameTextView.setText(client.getName());
                    emailTextView.setText(client.getEmail());
                    birthTextView.setText(client.getBirth());
                    trainPlanTextView.setText(client.getTrainPlanName());
                    personalTrainerTextView.setText(client.getPersonalTrainerName());


                }

            }

            @Override
            public void onFailure(Call<Client> call, Throwable t) {
                Log.e(LOG_TAG, "onFailure: " + t.getMessage());
            }
        });


    }

    public void payment(View view) {

        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://10.0.2.2:5000/")
                .addConverterFactory(GsonConverterFactory.create());
        Retrofit retrofit = builder.build();

        ClientServices clientServices = retrofit.create(ClientServices.class);

        Call<Payment> call = clientServices.getOnePayment(clientId);

        call.enqueue(new Callback<Payment>() {
            @Override
            public void onResponse(Call<Payment> call, Response<Payment> response) {

                if (!response.isSuccessful()) {
                    Log.e(LOG_TAG, "onResponse: " + response.code());
                    Log.e(LOG_TAG, "onResponse: " + response.message());


                } else {
                    Payment payment = response.body();
                    Number total = Integer.parseInt(payment.getTrainingPlanValue()) + Integer.parseInt(payment.getPersonalTrainerValue() )-
                            Integer.parseInt(payment.getDiscountValue());

                    AlertDialog.Builder payBuilder = new AlertDialog.Builder(ClientProfileActivity.this);
                    payBuilder.setTitle("Pagamento");
                    StringBuilder sb = new StringBuilder();
                    sb.append("Plano de Treino: " + payment.getTrainingPlanName() + " " + payment.getTrainingPlanValue() + "$00");
                    sb.append("\n");
                    sb.append("Personal Trainer: " + payment.getPersonalTrainerName() + " " + payment.getPersonalTrainerValue()+ "$00");
                    sb.append("\n");
                    sb.append("Discount: " + payment.getDiscountName() + " " + payment.getDiscountValue()+ "$00");
                    sb.append("\n");
                    sb.append("Total: " + total+"$00");

                    payBuilder.setMessage(sb.toString());


                    payBuilder.setPositiveButton("Confirmar", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            Retrofit.Builder builder1 = new Retrofit.Builder()
                                    .baseUrl("http://10.0.2.2:5000/")
                                    .addConverterFactory(GsonConverterFactory.create());

                            Retrofit retrofit1 = builder1.build();
                            ClientServices clientServices1 =  retrofit1.create(ClientServices.class);
                            Payment newPayment = new Payment(clientId,payment.getPersonalTrainerId(),payment.getTrainingPlanId(), payment.getDiscountPlanId());
                            Call<ResponseBody> call = clientServices1.createPayment(newPayment);

                            call.enqueue(new Callback<ResponseBody>() {
                                @Override
                                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                                    if(!response.isSuccessful()){
                                        Log.e(LOG_TAG,"onResponse: " + response.code());
                                    }else{
                                        Log.d(LOG_TAG,"onResponse: " + response.body());
                                        toastDisplay("Pagamento Com sucesso");


                                    }

                                }

                                @Override
                                public void onFailure(Call<ResponseBody> call, Throwable t) {
                                    Log.e(LOG_TAG,"onFailure: " + t.getMessage());
                                }
                            });
                        }
                    });

                    payBuilder.setNegativeButton("Cancelar", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {

                        }
                    });

                    payBuilder.show();
                }
            }

            @Override
            public void onFailure(Call<Payment> call, Throwable t) {
                Log.d(LOG_TAG, "Cant handle this");
            }
        });



    }

    private void toastDisplay(String message){
        Toast.makeText(this,message,Toast.LENGTH_SHORT).show();
    }
}