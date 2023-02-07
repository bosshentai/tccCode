class Employee {
  id?: string
  name: string;
  email: string
  phone: string
  cni: string
  nif: string
  birth: Date

  private constructor({
    name,
    email,
    phone,
    cni,
    nif,
    birth,
  }: Employee) {
    this.name = name,
    this.email = email,
    this.phone = phone,
    this.cni = cni,
    this.nif = nif,
    this.birth = birth

    // return Object.assign(this, {
    //   name,
    //   email,
    //   phone,
    //   cni,
    //   nif,
    //   birth,
    // })
  }

  static create({
    name,
    email,
    phone,
    cni,
    nif,
    birth,
  }: Employee) {
    const employee = new Employee({
      name,
      email,
      phone,
      cni,
      nif,
      birth,
    })
    return employee
  }
}

export { Employee }
