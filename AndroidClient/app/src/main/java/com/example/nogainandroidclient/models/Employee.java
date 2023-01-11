package com.example.nogainandroidclient.models;

import com.example.nogainandroidclient.utils.Role;

import java.util.Date;

public class Employee  {

    private String name;
    private String email;
    private Date birthDate;
    private Role role;
    private String phone;
    private String CNI;
    private String NIF;


    public Employee(String name, String email, Date birthDate, String phone,String cni,String nif){
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.phone = phone;
        this.CNI = cni;
        this.NIF = nif;
        this.role = Role.EMPLOYEE;


    }



//    private


}
