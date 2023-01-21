package com.example.nogainandroidclient.models;

public class Payment {

    private String clientId;
    private String personalTrainerId;
    private String personalTrainerName;
    private String persontalTrainerValue;

    private String trainingPlanId;
    private String trainingPlanName;
    private String trainingPlanValue;

    private String discountPlanId;

    private String discountId;
    private String discountName;
    private String discountValue;

    public Payment(String clientId,String personalTrainerId, String trainingPlanId, String discountId) {
        this.clientId = clientId;
        this.personalTrainerId = personalTrainerId;
        this.trainingPlanId = trainingPlanId;
        this.discountId = discountId;
    }

    public String getPersonalTrainerId() {
        return personalTrainerId;
    }

    public String getPersonalTrainerName() {
        return personalTrainerName;
    }

    public String getPersonalTrainerValue() {
        return persontalTrainerValue;
    }

    public String getTrainingPlanId() {
        return trainingPlanId;
    }

    public String getTrainingPlanName() {
        return trainingPlanName;
    }

    public String getTrainingPlanValue() {
        return trainingPlanValue;
    }

    public String getDiscountPlanId() {
        return discountPlanId;
    }

    public String getDiscountName() {
        return discountName;
    }

    public String getDiscountValue() {
        return discountValue;
    }
}
