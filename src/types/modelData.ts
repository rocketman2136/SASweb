declare interface IUserModelData extends BI{
    user: utils.User;
    klasses: utils.Klass[]; 
  }
  
declare class UserModelData implements IUserModelData {
    user: utils.User;
    klasses: utils.Klass[];
 }

interface BI {}