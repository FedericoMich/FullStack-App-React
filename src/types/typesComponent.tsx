/*dichiaro i tipi*/

export type TypeClass = {
    codice: string;
    titolo: string;
}

export type TypeStudent = {
    name: string;
    surname: string;
    login: string;
    session: boolean;
    class?: TypeClass;
    repos?: string[];
}


export type TypePages = {
    id: number;
    action: Element;
}


export interface CourseType {
    id?: any | null,
    name: string,
    year: string,
  }
export type UserType = {
    name: string,
    surname: string,
    repos?: string,
};




