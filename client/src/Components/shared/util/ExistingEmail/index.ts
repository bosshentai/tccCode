import axios, { AxiosResponse } from 'axios'

const urlPath = 'http://localhost:5000/api/user/allemail'

type emailType = {
  email: string
}

export const existingEmail = async (email: string) =>
  // : Promise<boolean>
  {
    // var  userEmail : emailType[] |[]

    try {
      const data = await axios
        .get(urlPath)
        .then((response: AxiosResponse) => {
          return response.data
        })

      // const emailExist = await data.includes(email)

      return data;
      // return emailExist;
      // return emailExist;
    } catch (error) {
      throw error;
      // console.log(error)
      // return false
    }

    return false
  }

console.log(existingEmail('maria2@gmail.com'))
