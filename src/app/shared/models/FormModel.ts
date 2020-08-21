import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ListFormsCategory {
    name: string;
    date?: string;
    id: number;
    category: string;
}

export interface FormInfo {

    info: {
        name: string;
        date?: any;
        category: string;
        uidUser: string;
        done: boolean;
    };

    data: Array<FormQuestion>;

}

export interface FormQuestion {

    question: string;
    value: number;

}


export interface CategoryForm {
    grupo: Array<CategoryParams>;
}

export interface CategoryParams {
    title: string;
    icon: IconDefinition;
    route: string;
}
