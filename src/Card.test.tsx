import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';

test('renders card title', () => {
  const { container } = render(<Card 
    id={1}
    title="test-title"
    description="test-description"
    url="test-url"
    votes={1}
    submitterAvatarUrl="test-submitterAvatarUrl"
    productImageUrl="test-productImageUrl"
    onClickCallback={(id: number) => {}}
  />);
  
  const title = container.querySelector('.title');
  expect(title.textContent).toBe("test-title");

  const submitterImage = container.querySelector('.submitter-image-box img');
  expect(submitterImage.getAttribute('src')).toBe("test-submitterAvatarUrl");
});
