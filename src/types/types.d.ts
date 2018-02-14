declare namespace Types {
    class Klass {
        id: number | undefined;
        name: string | undefined;
        courseNN: string;
        description: string | undefined;
        startDate: string| undefined;
        startTime: string | undefined;
        daysOfWeek: Array<string> | undefined;
        endTime: string | undefined;
    }

    class Attendance {
        klassID: number | undefined;
        datesPresent: Array<boolean>
    }
    
    class User {
        role: string | undefined;
        firstName: string | undefined;
        lastName: string | undefined;
        email: string | undefined;
        klasses: Array<Klass> | undefined;
        fullAtt: Array<Attendance> | undefined;
    }
}


