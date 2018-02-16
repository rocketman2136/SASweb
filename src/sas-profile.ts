/// <reference path="./types/types.d.ts"/>
/// <reference path="../@types/polymer.d.ts"/>
/// <reference path="../bower_components/polymer-decorators/polymer-decorators.d.ts"/>

@customElement('sas-profile')
class SASProfile extends Polymer.Element {
  @property({notify: true})
  model: UserModelData;
  
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  klasses: Types.Klass[] | undefined;
  title: string;

  // ready(){
  //   super.ready();
  //   this.firstName = this.model.user.firstName;
  //   this.lastName = this.model.user.lastName;
  //   this.email = this.model.user.email;
  //   this.klasses = this.model.user.klasses;
  // }

  // @observe(['firstName', 'lastName'])
  // _titleChange(firstName: string | undefined, lastName: string | undefined) {
  //   if(!((firstName === undefined) || (lastName === undefined)))
  //     this.title = firstName + ' ' + lastName;
  //   if(firstName !== undefined)
  //     this.model.user.firstName = firstName;
  //   if(lastName !== undefined)
  //     this.model.user.lastName = lastName;
  // }

  // @observe('email')
  // _emailChange(email: string | undefined) {
  //   if(email !== undefined)
  //     this.model.user.email = email;
  // }

  // @observe('klasses')
  // _klassesChange(klasses: Types.Klass[] | undefined) {
  //   if(klasses !== undefined)
  //     this.model.user.klasses = this.klasses;
  // }
  

}