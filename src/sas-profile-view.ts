/// <reference path="./types/types.d.ts"/>
/// <reference path="../@types/polymer2-ts.ts"/>

@customElement('sas-profile-view')
class SASProfileView extends Polymer.Element {
  @property({ reflectToAttribute: true, notify: true })
  model: IUserModelData;

  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  klasses: utils.Klass[] | undefined;
  title: string;
  midName: string | undefined;
  rocketNum: number | undefined;

    ready(){
      super.ready();
      this.firstName = this.model.user.firstName;
      this.lastName = this.model.user.lastName;
      this.email = this.model.user.email;
      this.midName = this.model.user.midName;
      this.rocketNum = this.model.user.rocketNum;
      this.klasses = this.model.user.klasses;
    }

  @observe('model')
  _modelChange(model: IUserModelData) {
    console.log(model);
  }

  @observe(['firstName', 'lastName'])
  _titleChange(firstName: string | undefined, lastName: string | undefined) {
    let title = '';
    if (!((firstName === undefined) || (lastName === undefined))){
      title = firstName + ' ' + lastName;
      this.model.user.firstName = firstName;
      this.model.user.lastName = lastName;
    }
    else if (firstName !== undefined){
      title = firstName;
      this.model.user.firstName = firstName;
    }
    else if (lastName !== undefined){
      title = lastName;
      this.model.user.lastName = lastName;
    }
    if (title.length > 50)
      title = title.substr(0, 50);
    this.title = title;
  }

  @observe('email')
  _emailChange(email: string | undefined) {
    if (email !== undefined)
      this.model.user.email = email;
  }

  @observe('rocketNum')
  _rNumChanged(rocketNum: number) {
    if(rocketNum !== undefined)
      this.model.user.rocketNum = this.rocketNum;
  }

  @observe('midName')
  _midNameChanged(midName: string) {
    if(midName !== undefined)
      this.model.user.midName = this.midName;
  }

  @observe('klasses')
  _klassesChange(klasses: utils.Klass[] | undefined) {
    if (klasses !== undefined)
      this.model.user.klasses = this.klasses;
  }
}