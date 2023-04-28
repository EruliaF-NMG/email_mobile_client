import {getData} from "../helpers/CommonHelpers";
import {getEmailsAPI} from "../config/core.config";

class EmailService {
  /**
   * Get all email templates
   * @returns 
   */
  async getAll() {
    try{
        const data =  await getData(getEmailsAPI);
        return data;
    } catch (ex){
        console.log(ex);
    }
  }
}

export default new EmailService();