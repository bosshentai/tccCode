import { ICreateClientDTO } from '../repositories/dto/Client/ICreateClientDTO'

class Client {
  name: string;
  email: string;
  phone: string;
  birth: Date;
  trainingPlanId: string;
  personalTrainerId: string;
  discountId: string

  private constructor({
    name,
    email,
    phone,
    birth,
    trainingplanId,
    personalTrainerId,
    discountId,
  }: ICreateClientDTO) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.birth = birth;
    this.trainingPlanId = trainingplanId;
    this.personalTrainerId = personalTrainerId;
    this.discountId = discountId;
  }
}
