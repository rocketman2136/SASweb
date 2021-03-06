/// <reference path="./../types/types.d.ts"/>
/// <reference path="../../@types/polymer2-ts.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let SASProfileModel = class SASProfileModel extends Polymer.Element {
    /// <reference path="./../types/types.d.ts"/>
    /// <reference path="../../@types/polymer2-ts.ts"/>
    constructor() {
        super(...arguments);
        this.mock = false;
    }
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
            };
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
    indexOf(item) {
        return this.data.user.klasses.indexOf(item);
    }
    addKlass(klass) {
        if (this.mock && klass.courseNN !== "") {
            this.push("data.user.klasses", klass);
            this.notifyPath("data.user.klasses");
        }
    }
    editKlass(klass, index) {
        if (this.mock) {
            this.splice("data.user.klasses", index, 1, Object.assign({}, klass));
            this.notifyPath("data.user.klasses");
        }
    }
};
__decorate([
    property({ notify: true, reflectToAttribute: true }),
    __metadata("design:type", Object)
], SASProfileModel.prototype, "data", void 0);
__decorate([
    property({ notify: true }),
    __metadata("design:type", Boolean)
], SASProfileModel.prototype, "mock", void 0);
SASProfileModel = __decorate([
    customElement('sas-profile-model')
], SASProfileModel);
