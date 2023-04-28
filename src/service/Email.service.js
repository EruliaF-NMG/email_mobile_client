import {getData} from "../helpers/CommonHelpers";
import {getEmailsAPI} from "../config/core.config";

class EmailService {
  async getAll() {
    try{
        console.log("EmailService")
        const data =  await getData(getEmailsAPI);
        return data;
    } catch (ex){
        console.log(ex);
    }
  }
}

export default new EmailService();