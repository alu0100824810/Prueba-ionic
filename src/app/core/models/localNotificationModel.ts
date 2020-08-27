


export interface ButtonsNotification {
    types: Array<ButtonMain>;
}


export interface ButtonMain {
    id: string;
    actions: Array<ButtonsInfo>;
}


export interface ButtonsInfo {
    id: string;
    title: string;
}



export interface DataNotification {
    title: string;
    message: string;
    img?: string;
    buttonsNotification: ButtonsNotification;
    type: string;
    data?: any; // ! encuestas
    id?: any;
}

