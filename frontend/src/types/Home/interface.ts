export interface IHomeIdentification {
    id: string
}


export interface IHomeFields {
    title: string,
    description: string,
    body: string
}

export interface IBlogAttributes {
    attributes: Partial<IHomeFields> & Pick<IHomeFields, 'title'>
}

export interface IHome extends IHomeIdentification, IBlogAttributes{}
