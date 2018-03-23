/// <reference path="./../types/types.d.ts"/>
/// <reference path="../../@types/polymer2-ts.ts"/>

@customElement('sas-profile-model')
class SASProfileModel extends Polymer.Element {
  @property({ notify: true, reflectToAttribute: true })
  data: IUserModelData;

  @property({ notify: true })
  mock: boolean = false;

  klasses: Array<utils.Klass>;
  connectedCallback() {
    super.connectedCallback();
    this.klasses = [{
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
    }];
    if (this.mock) {
      this.data = {
        user: {
          role: 'teacher',
          firstName: 'John',
          lastName: 'Smith',
          midName: 'Dwight',
          email: 'john.smith@gmail.com',
          rocketNum: 123456678,
          klasses: [this.klasses[0], this.klasses[1], this.klasses[2]],
          fullAtt: undefined,
        },
        klasses: [{
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
        }]
      }

      this.notifyPath('data.klasses');
      this.notifyPath('data.user');
    }
    else {
      // live endpoint
    }

  }

  BlankState() {
    let blankState = {
      name: '',
      courseNN: '',
      description: '',
      startDate: '',
      startTime: '',
      endTime: '',
      daysOfWeek: undefined,
    };
    return blankState;
  }

  indexOf(item: utils.Klass) {
    return (((this.data as IUserModelData).user as utils.User).klasses as utils.Klass[]).indexOf(item);
  }

  addKlass(klass: utils.Klass){
    if(this.mock && klass.courseNN !== ""){
      this.push("data.user.klasses", klass);
      this.notifyPath("data.user.klasses");
    }
  }

  editKlass(klass: utils.Klass, index: number) {
    if(this.mock) {
      this.splice("data.user.klasses", index, 1, Object.assign({}, klass));
      this.notifyPath("data.user.klasses");
    }
  }


}