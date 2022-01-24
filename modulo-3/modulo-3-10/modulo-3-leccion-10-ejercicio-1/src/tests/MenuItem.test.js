import { render, screen } from '@testing-library/react';
import MenuItem from '../components/MenuItem';

test('check if links target are _blank when openInNewTab is truthy' , () => {
  // Arrange
  render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />);
  // Act
  const blogLabel = screen.getByText('Blog');
  // Assert
  expect(blogLabel.target).toBe('_blank');
});

test('check if links target "" when openInNewTab is falsy' , () => {
  // Arrange
  render(<MenuItem text="Contacto" href="https://adalab.es/contacto"/>);
  // Act
  const blogLabel = screen.getByText('Contacto');
  // Assert
  expect(blogLabel.target).toBe('');
});