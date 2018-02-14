/// <reference path="./types/types.d.ts"/>

declare class UserModelData {
  user: Types.User;
  klasses: Types.Klass[];
}

@customElement('sas-profile-model')
declare class SASProfileModel extends Polymer.Element {
  @property({ notify: true })
  data: UserModelData;

  @property({ notify: true })
  mock: boolean;

  connectedCallback() {
    super.connectedCallback();
    let self = this;
    if (self.mock) {
      self.data.klasses = [
        {
          id: 1,
          name: 'Senior Design II',
          courseNN: 'EECS4020-001',
          description: 'Seniors Design Products',
          startDate: 'January 22, 2018',
          startTime: '10:00AM',
          endTime: '10:55AM',
          daysOfWeek: ['Monday'],
        },
        {
          id: 2,
          name: 'Systems and System Operating',
          courseNN: 'EECS3540-001',
          description: 'Learning how O.S. works',
          startDate: 'January 16, 2018',
          startTime: '8:00AM',
          endTime: '9:20AM',
          daysOfWeek: ['Tuesday', 'Thurday'],
        },
        {
          id: 3,
          name: 'Software Enginneering',
          courseNN: 'EECS3550-001',
          description: 'The ins and outs of software engineering',
          startDate: 'January 16, 2018',
          startTime: '12:55PM',
          endTime: '2:15PM',
          daysOfWeek: ['Tuesday', 'Thursday'],
        },
      ];
      self.data.user = {
        role: 'teacher',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@gmail.com',
        klasses: [this.data.klasses[0], this.data.klasses[1], this.data.klasses[3]],
        fullAtt: undefined,
      }
    }
    else{

    }
  }

  
}