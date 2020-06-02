import Knex from 'knex';

export async function seed(knex: Knex) {
  knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e baterias', image: 'baterias.svg' },
    { title: 'Lâmpadas', image: 'papeis-papelao.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
  ]);
}
