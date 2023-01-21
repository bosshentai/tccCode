package com.example.nogainandroidclient;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.util.Patterns;
import android.view.View;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Toast;

import com.example.nogainandroidclient.models.Employee;
import com.example.nogainandroidclient.utils.ClientServices;

import java.util.Calendar;
import java.util.Date;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CreateEmployeeActivity extends AppCompatActivity {

    private EditText fullNameEditText;
    private EditText emailEditText;
    private EditText phoneEditText;
    private EditText cniEditText;
    private EditText nifEditText;
    private EditText birthEditText;

    private final String LOG_TAG = CreateEmployeeActivity.class.getSimpleName();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_employee);


        fullNameEditText = findViewById(R.id.fullNameInput);
        emailEditText = findViewById(R.id.emailInput);
        phoneEditText = findViewById(R.id.phoneInput);
        cniEditText = findViewById(R.id.cniInput);
        nifEditText = findViewById(R.id.nifInput);
        birthEditText = findViewById(R.id.birthInput);


        Calendar calendar = Calendar.getInstance();
        final int year = calendar.get(Calendar.YEAR);
        final int month = calendar.get(Calendar.MONTH);
        final int day = calendar.get(Calendar.DAY_OF_MONTH);


        birthEditText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatePickerDialog datePickerDialog = new DatePickerDialog(CreateEmployeeActivity.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int day) {
                        month = month + 1;

                        String date = year + "-" + month + "-" + day;
                        birthEditText.setText(date);
                    }
                }, year, month, day);

                datePickerDialog.show();
            }
        });


    }

    public void cancelHandler(View view) {

        AlertDialog.Builder cancelAlertBuilder = new AlertDialog.Builder(CreateEmployeeActivity.this);

        //title
        cancelAlertBuilder.setTitle(R.string.alert_dialog_title);
        cancelAlertBuilder.setMessage(R.string.alert_dialog_message);


        cancelAlertBuilder.setPositiveButton(R.string.yes_option, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                finish();
            }
        });

        cancelAlertBuilder.setNegativeButton(R.string.no_option, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

            }
        });

        cancelAlertBuilder.show();
    }

    public void addEmployeeHandler(View view) {


        fullNameEditText.setText("Hernani Baptista");
        emailEditText.setText("baptistasdasdaa@gmail.com");
        phoneEditText.setText("9432354");
        cniEditText.setText("19931022M003R");
        nifEditText.setText("123456789");
        birthEditText.setText("1993-10-22");
//        birthDayEditText.setText(R.string.example_birth);


        String fullName = fullNameEditText.getText().toString();
        String email = emailEditText.getText().toString();
        String phone = phoneEditText.getText().toString();
        String cni = cniEditText.getText().toString();
        String nif = nifEditText.getText().toString();
        String birth = birthEditText.getText().toString();


        // Empty
        Boolean isFullNameEmpty = fullName.isEmpty();
        Boolean isEmailEmpty = email.isEmpty();
        Boolean isPhoneEmpty = phone.isEmpty();
        Boolean isCNIEmpty = cni.isEmpty();
        Boolean isNIFEmpty = nif.isEmpty();
        Boolean isBirthEmpty = birth.isEmpty();

        //
        Boolean isFullNameSize = fullName.length() >= 8 ;

        // Valid
        Boolean isFullNameValid = fullNameValid(fullName);
        Boolean isEmailValid = emailValid(email);
        Boolean isPhoneNumberValid = phoneValid(phone);
        Boolean isCNIValid = validCNI(cni);
        Boolean isNIFValid = nifValid(nif);

//
//        Boolean isNotEmpty = !isFullNameEmpty && !isEmailEmpty && !isPhoneEmpty && !isCNIEmpty &&
//                !isNIFEmpty && !isBirthEmpty;

        Boolean isFormOK = !isFullNameEmpty && isFullNameValid && !isEmailEmpty && isEmailValid
                && !isPhoneEmpty && isPhoneNumberValid && !isCNIEmpty && isCNIValid && !isNIFEmpty &&
                isNIFValid && !isBirthEmpty;


        if (isFullNameEmpty) {
//            toastDisplay(String.valueOf(R.string.toast_fullName_empty));
            toastDisplay("Nome Completo Vazio");
            return;
        }
        if (isEmailEmpty) {
            toastDisplay("Email Vazio");
            return;
        }
        if (isPhoneEmpty) {
            toastDisplay("Phone Vazio");
            return;
        }
        if (isCNIEmpty) {
            toastDisplay("CNI Vazio");
            return;
        }

        if (isNIFEmpty) {
            toastDisplay("NIF Vazio");
            return;
        }
        if (isBirthEmpty) {
            toastDisplay("Birth Vazio");
            return;
        }

        if(!isFullNameSize){
            toastDisplay("Nome minimo 8 caracteres");
            return;
        }

        if(!isFullNameValid){
            toastDisplay("Nome Completo Invalido");
            return;
        }

        if(!isEmailValid){
            toastDisplay("Email Invalido");
            return;
        }
        if(!isPhoneNumberValid){
            toastDisplay("Telemovel Invalido");
            return;
        }
        if(!isCNIValid){
            toastDisplay("CNI Invalido");
            return;
        }

        if(!isNIFValid){
            toastDisplay("NIF Invalido");
            return;
        }



        if(isFormOK){
            Retrofit.Builder builder = new Retrofit.Builder()
                    .baseUrl("http://10.0.2.2:5000/")
                    .addConverterFactory(GsonConverterFactory.create());

            Retrofit retrofit = builder.build();
            ClientServices clientServices = retrofit.create(ClientServices.class);
//            Log.d(clientServices)
            Employee newEmployee = new Employee(fullName,email,birth,phone,cni,nif);
            Call<ResponseBody> call = clientServices.createEmployee(newEmployee);

            call.enqueue(new Callback<ResponseBody>() {
                @Override
                public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {

                    if (!response.isSuccessful()){
                        Log.e(LOG_TAG,"onResponse: "+ response.code());

                    }else{
                        Log.d(LOG_TAG,"OnResponse: " + response.body());
                        finish();

                    }

                }

                @Override
                public void onFailure(Call<ResponseBody> call, Throwable t) {
                    Log.e(LOG_TAG,"OnFailure: " + t.getMessage());



                }
            });

        }



//        if (isNotEmpty) {
//            Boolean isFullNameValid = fullNameValid(fullName);
//            Boolean isEmailValid = emailValid(email);
//            Boolean isPhoneNumberValid = phoneValid(phone);
//            Boolean isCNIValid = validCNI(cni);
//            Boolean isNIFValid = nifValid(nif);
//
//
//        }


    }


    private void toastDisplay(String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }


    protected boolean fullNameValid(String name) {
        return name.matches("^[a-zA-Z\\s]+$");
    }

    protected boolean emailValid(String email) {

        return Patterns.EMAIL_ADDRESS.matcher(email).matches();


    }

    protected boolean phoneValid(String phone) {

        return phone.matches("[9|5|3]{1}[0-9]{6}");
//        return phone.matches("^([+]?\\d{1,2}[-\\s]?|)\\d{2,3}[-\\s]?\\d{3}[-\\s]?\\d{2,4}$");
    }

    protected boolean nifValid(String nif) {
        return nif.matches("[0-9]{9}");
    }


    protected boolean day31(int day) {

        return day > 0 && day <= 31;
    }

    protected boolean day30(int day) {
        if (day > 0 && day <= 30) {
            return true;
        }

        return false;
    }

    protected boolean day29(int day) {
        if (day > 0 && day <= 29) {
            return true;
        } else {
            return false;
        }
    }

    protected boolean day28(int day) {
        if (day > 0 && day <= 28) {
            return true;
        }
        return false;
    }

    protected boolean bisexed(int day, int year) {

        if (year % 100 == 0 && year % 400 == 0 && year % 4 == 0) {
            return day29(day);
        } else {
            return day28(day);
        }
    }


    protected boolean validBirth(int day, int month, int year) {

        if (year > 0) {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return day31(day);
                case 2:
                    return bisexed(day, year);
                case 4:
                case 6:
                case 9:
                case 11:
                    return day30(day);
                default:
                    return false;
            }
        }

        return false;
    }

    protected boolean validSexCNI(String sex) {

        return sex.matches("[M|F]");

    }

    protected boolean valid3Number(String number) {

        if (number.matches("[0-9]{3}")) {
            return true;
        }

        return false;
    }

    protected boolean validCharacter(String character) {

        if (character.matches("[A-Z]{1}")) {
            return true;
        }

        return false;
    }

    protected boolean validCNI(String cni) {

//        Log.d(LOG_TAG, String.valueOf(cni.length()));

        if (cni.length() == 13) {
            int year = Integer.parseInt(cni.substring(0, 4));

            int month = Integer.parseInt(cni.substring(4, 6));

            int day = Integer.parseInt(cni.substring(6, 8));

            Boolean isDataValid = validBirth(day, month, year);

//            Log.d(LOG_TAG, String.valueOf(isDataValid));
//            Log.d(LOG_TAG,"SexInput: " + cni.substring(8, 9));

            Boolean isSexValid = validSexCNI(cni.substring(8, 9));
            Boolean is3NumberValid = valid3Number(cni.substring(9, 12));
            Boolean isCharacterValid = validCharacter(cni.substring(12, 13));


//            Log.d(LOG_TAG, "Date is " +String.valueOf(isDataValid));
//            Log.d(LOG_TAG, "Sex is  " +  String.valueOf(isSexValid));
//            Log.d(LOG_TAG,"3Number is " + String.valueOf(is3NumberValid));
//            Log.d(LOG_TAG,"isCharacterValid is " + String.valueOf(isCharacterValid));



            return isDataValid && isSexValid && is3NumberValid && isCharacterValid;

        }
        return false;
//    }

//        return false;


    }

}