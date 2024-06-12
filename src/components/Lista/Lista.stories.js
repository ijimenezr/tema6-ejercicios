import Lista from './Lista';

export default {
    title: 'Componentes/Lista',
    component: Lista,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        colorTexto: { control: 'color' },
    },
};

export const Light = {
    args: {
        colorTexto: "#000",
        colorFondo: "#fff",
        lista: ['Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10'],
    },
};

export const Dark = {
    args: {
        colorTexto: "#fff",
        colorFondo: "#000",
        lista: ['Elemento 11', 'Elemento 12', 'Elemento 13', 'Elemento 14', 'Elemento 15'],
    },
};