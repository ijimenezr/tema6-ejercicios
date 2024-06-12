import Card from './Card';

export default {
    title: 'Card',
    component: Card,
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
        textoPrimario: "Primera",
        textoSecundario: "Segunda",
        colorTexto: "#fff",
    },
};

export const Dark = {
    args: {
        textoPrimario: "Primera",
        textoSecundario: "Segunda",
        colorTexto: "#000",
    },
};