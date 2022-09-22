/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie').del()
  await knex('movie').insert([
    {title: 'The Spongebob Movie'},
    {title: 'Shrek'},
    {title: 'Shrek 2'},
    {title: 'Shrek 3'},
    {title: 'AlphaGo'}
  ]);
};
