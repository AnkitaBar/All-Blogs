//////////////////// All Student

export interface IallStudentProps {
    status:string;
    totalStudent: number;
    data: [
      {
        _id: string;
        name: string;
        email: string;
        phone: string,
        address: string,
        city: string;  
        class: string;
      }
    ]
  }
  export interface allStudentProps extends IallStudentProps {
    data: IallStudentProps["data"]
  }

////////////// add student

export interface IaddStudentProps {
  success: boolean;
  msg: string;
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    class: string;
      
    
  }
  export interface addStudentProps extends IaddStudentProps {
    data: IaddStudentProps
  }

  ////////////////// edit student details 
  export interface IeditStudentProps {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    class: string;
  }
  export interface editStudentProps extends IeditStudentProps {
    data: IeditStudentProps
  }

  /////////////////// update student details
  export interface IupdateStudentProps {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    class: string;
    // message: string;
  }
  export interface updateStudentProps extends IupdateStudentProps {
    data: IupdateStudentProps
  }

  ///////////////////// delete student
  export interface IdeleteStudentProps {
  status: boolean;
    msg: string;
    _id: string;
    
  }
  export interface deleteStudentProps extends IdeleteStudentProps {
    data: IdeleteStudentProps
  }