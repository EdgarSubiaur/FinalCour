import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Prueba 1: Validar los atributos HTML5
test('should have required attributes for inputs', () => {
  render(<BookingForm />);

  // Verificar que el campo de nombre tenga el atributo "required"
  const nameInput = screen.getByLabelText(/Your Name/i);
  expect(nameInput).toHaveAttribute('required');

  // Verificar que el campo de fecha tenga el atributo "required" y "min" (fecha mínima)
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('min', expect.any(String)); // La fecha mínima es hoy

  // Verificar que el campo de invitados tenga "min" y "max"
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  // Verificar que el campo de hora tenga el atributo "required"
  const timeSelect = screen.getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');

  // Verificar que el campo de ocasión tenga el atributo "required"
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

// Prueba 2: Verificar que el botón de enviar esté deshabilitado cuando el formulario es inválido
test('should disable submit button when form is invalid', () => {
  render(<BookingForm />);

  const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });
  
  // El formulario está vacío inicialmente, el botón debe estar deshabilitado
  expect(submitButton).toBeDisabled();

  // Completar el formulario con datos válidos
  fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-11-27' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  // Ahora el formulario debe ser válido y el botón debe estar habilitado
  expect(submitButton).toBeEnabled();
});

// Prueba 3: Verificar que el botón de enviar se habilite cuando todos los campos estén correctamente llenados
test('should enable submit button when all fields are filled correctly', () => {
  render(<BookingForm />);

  const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

  // Asegúrese de que el botón de enviar esté deshabilitado al principio
  expect(submitButton).toBeDisabled();

  // Llenar el formulario con datos válidos
  fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-11-27' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  // El formulario es ahora válido, por lo que el botón debe estar habilitado
  expect(submitButton).toBeEnabled();
});
