import React from 'react';
import { reducer } from './Products';

test('reducer function test', () => {
  const sampleData = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: 10,
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
      onClickCallback: ()=>{}
    },
    {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: 10,
        submitterAvatarUrl: 'images/avatars/kristy.png',
        productImageUrl: 'images/products/image-rose.png',
        onClickCallback: ()=>{}
    },
  ]
  const expectedOutput = [
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: 11,
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
      onClickCallback: ()=>{}
    },
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: 10,
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
      onClickCallback: ()=>{}
    },
  ]
  const finState = reducer(sampleData, 2)
  expect(finState.toString()).toEqual(expectedOutput.toString());
});
