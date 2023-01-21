package com.example.nogainandroidclient.models;

import com.example.nogainandroidclient.utils.Role;
import com.example.nogainandroidclient.utils.Status;

public class Client {

    private String id;

    private String name;

    private String email;

    private String birth;

    private Role role;

    private String phone;

    private String personalTrainerName;
    private String personalTrainerId;
    private String discountId;

    private String trainingPlanName;
    private String trainPlan;


//    private Status status;


    public Client(String name, String email, String birth, String phone, String cni, String nif,
                  String personalTrainerId, String discountId) {
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.phone = phone;
        this.personalTrainerId = personalTrainerId;
        this.discountId = discountId;
//        this.
    }

    public String getId() {
        return id;
    }

    public String getPhone() {
        return phone;
    }

    public String getBirth() {
        return birth;
    }

    public String getPersonalTrainerName() {
        return personalTrainerName;
    }

    public String getTrainPlanName() {
        return trainingPlanName;
    }

    public String getTrainPlan() {
        return trainPlan;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
