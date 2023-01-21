package com.example.nogainandroidclient.models;

import com.example.nogainandroidclient.utils.Role;
import com.example.nogainandroidclient.utils.Status;

public class Employee {


    private String id;
    private String name;
    private String email;
    private String birth;
    private Role role;
    private String phone;
    private String CNI;


    private String NIF;
    private Status status;


    public Employee(String name, String email, String birthDate, String phone, String cni, String nif) {
        this.name = name;
        this.email = email;
        this.birth = birthDate;
        this.phone = phone;
        this.CNI = cni;
        this.NIF = nif;
        this.role = Role.EMPLOYEE;


    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return id;
    }

    public String getPhone() {
        return phone;
    }



    public Status getStatus() {
        return status;
    }
//    private


}
