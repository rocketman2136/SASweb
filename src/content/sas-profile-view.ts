/// <reference path="./../types/types.d.ts"/>
/// <reference path="../../@types/polymer2-ts.ts"/>

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
  tKlass: utils.Klass |  undefined;
  i: number | undefined;
  addEdit: string | undefined; 

  ready() {
    super.ready();
    this.firstName = this.model.user.firstName;
    this.lastName = this.model.user.lastName;
    this.email = this.model.user.email;
    this.midName = this.model.user.midName;
    this.rocketNum = this.model.user.rocketNum;
    this.klasses = this.model.user.klasses;
  }

  @observe(['firstName', 'lastName'])
  _titleChange(firstName: string | undefined, lastName: string | undefined) {
    let title = '';
    if (!((firstName === undefined) || (lastName === undefined))) {
      title = firstName + ' ' + lastName;
      this.model.user.firstName = firstName;
      this.model.user.lastName = lastName;
    }
    else if (firstName !== undefined) {
      title = firstName;
      this.model.user.firstName = firstName;
    }
    else if (lastName !== undefined) {
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
    if (rocketNum !== undefined)
      this.model.user.rocketNum = this.rocketNum;
  }

  @observe('midName')
  _midNameChanged(midName: string) {
    if (midName !== undefined)
      this.model.user.midName = this.midName;
  }

  @observe('klasses')
  _klassesChange(klasses: utils.Klass[] | undefined) {
    if (klasses !== undefined)
      this.model.user.klasses = this.klasses;
  }

  _openEditDialog(e: IPolymerMouseEvent) {
    if (e !== undefined) {
      this.$.editModal.style.display = "block";
      this.tKlass = e.model.item as utils.Klass;
      this.i = this.$.profile.indexOf(this.tKlass);
      this.addEdit = "Edit";
    }
  }

  _openAddDialog() {
      this.$.addModal.style.display = "block";
      this.tKlass = this.$.profile.BlankState();
      this.addEdit = "Add";
  }

  _cancelDialog() {
    this.tKlass = undefined;
    this.$.editModal.style.display = "none";
    this.$.addModal.style.display = "none";
  }

  _closeEditDialog() {
    if (this.tKlass !== undefined){
      this.$.profile.editKlass(this.tKlass, this.i);
      this.$.editModal.style.display = "none";
    }
  }

  _closeAddDialog() {
    if (this.tKlass !== undefined){
      this.$.profile.addKlass(this.tKlass);
      this.$.addModal.style.display = "none";
    }
  }

}